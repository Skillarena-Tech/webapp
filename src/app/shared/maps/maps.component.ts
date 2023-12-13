import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, SimpleChanges, HostListener, OnDestroy, OnChanges } from '@angular/core';
// import { UtilityFunctions } from '../../../app/utilities/utility-func';
import { environment } from '../../../environments/environment';

declare let google: any;
@Component({
  selector: 'sa-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent {
  @ViewChild('mapContainer') mapContainer: ElementRef | undefined;

  public mapInstance: any;
  @Input() showTilt = false;
  @Input() mapType = false;
  public loaders: any = {
    polyLine: false,
  };
  @Input() tooltipOptions: any = [];
  @Input() mapOptions: any = {
    "center": { lat: 24.45, lng: 54.37 },
    "zoom": 5,
    "heading": 10,
    "tilt": 47.5,
    "mapTypeId": 'satellite',
    "mapId": environment.mapId,
    "mapTypeControl": false,
    "streetViewControl": false,
    "activeMapType": 'satellite',
    selectedVisualType: 'table',
  };

  @Input() uniqueId: any;
  @Input() title: any;
  @Input() mapData: any;
  @Output() visualTypeEmitter = new EventEmitter();
  @Output() tooltipHoverEmitter = new EventEmitter();
  public hideOriginal: any = false;
  public mapTypes = [
    { id: 'satellite', name: 'Satellite', svg: 'assets/images/satellite.svg', tooltip: 'Switch to Satellite' },
    { id: 'terrain', name: 'Terrain', svg: 'assets/images/terrain.svg', tooltip: 'Switch to Terrain' }
  ];
  // public activeMapType: any = 'satellite';
  public selectedMapType = { id: 'satellite', name: 'Satellite' };
  public wrapper: any;
  public mapEle: any;
  public tableEle: any;
  public plotMarker: any;
  map: any;
  public storedMarkers: any = [];
  public storedLabels: any = [];
  public mapOptionsChartSatelite: any;
  public tableMaxHeight :any = 0.75;
  public tableMinHeight :any = 0;
  public legendEle :any;
  public tooltipOptObject: any = {};
  public markersLoopData :any ={ };
  public dataLoopData :any = {};
  public infoWindowLoopData :any ={};
  public tooltipLoopData: any = {};
  public infoWindowList: any = {};
  constructor() { }

  ngOnInit(): void {
    this.initializeMap();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['mapOptions']) {
      // if ((this.showMarkers &&  this.mapData?.markers?.length) || (this.showPolylines && this.mapData?.polylines?.length)) {
      //   delete this.mapOptions['center'];
      //   delete this.mapOptions['zoom'];
      // }
      this.initializeMap();
    }
    if (changes['tooltipOptions'] && this.tooltipOptions) {
      this.tooltipOptions = [...this.tooltipOptions];
      // remove markers layer
      if (this.tooltipOptions?.length) {
        this.mapInstance = null;
        this.initializeMap();
      }
    }
  }

  ngAfterViewInit() {
    this.initializeMap();
  }

  initializeMap() {
    try {
      if (this.mapContainer?.nativeElement && this.mapOptions) {
        this.mapInstance = new google.maps.Map(this.mapContainer.nativeElement, this.mapOptions);
        this.plotMarker();
      }
      this.changeMapType(this?.mapOptions?.activeMapType || 'satellite');
    } catch (initErr) {
      console.error(initErr);
    }
  }

  adjustMap(mode: string, amount: number) {
    try {
      switch (mode) {
        case "tilt":
          this.mapInstance.setTilt(this.mapInstance.getTilt()! + amount);
          break;
        case "rotate":
          this.mapInstance.setHeading(this.mapInstance.getHeading()! + amount);
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };



  plotMarkers() {
    try {
      const markers = this.mapData?.markers;
      this.storedMarkers = [];
      if (markers?.length) {
        var infoWindow = new google.maps.InfoWindow();
        // let bounds = new google.maps.LatLngBounds();
        for (let ind = 0; ind < markers?.length; ind++) {
          let eachMarker = markers[ind];
          // bounds.extend(new google.maps.LatLng(
          // parseFloat(eachMarker.lat),
          // parseFloat(eachMarker.lng)));
          if (eachMarker.hasOwnProperty('path')) {
            const markerData: any = {
              position: eachMarker,
              map: this.mapInstance,
            }
            if (eachMarker?.path) {
              markerData['icon'] = {
                path: eachMarker?.path,
                fillColor: eachMarker.color,
                fillOpacity: 1,
                strokeWeight: 0,
              }
            } else {
              markerData['icon'] = {
                path: 0,
                scale: 4,
                strokeColor: eachMarker.color,
                strokeWeight: 3,
              };
            }
            let marker = new google.maps.Marker(markerData);
            marker.setMap(this.mapInstance);
            this.markersLoopData['marker_'+ind] = marker;
            this.dataLoopData['data_'+ind] = eachMarker;
            this.storedMarkers.push(marker);
            this.tooltipLoopData['tooltipData_'+ind] = this.tooltipOptions;
            this.infoWindowList['info_'+ind] = infoWindow;
            if (eachMarker?.tooltip?.length) {
              const tooltipOpt = this.tooltipOptions;
              this.defineTooltip(marker, eachMarker, tooltipOpt, infoWindow, null, ind);
            }
          }
        }
        // if (bounds && this.mapInstance) {
          // this.mapInstance?.fitBounds(bounds);
        // }
      }
    } catch (error) {
      console.error(error);
    }
  }


  defineTooltip = (marker: any, data: any, tooltipOpt: any, infoWindow: any, isPolyline?: any, ind?: any) => {
    try {      
      google.maps.event.addListener(marker, "mouseover", (e: any) => {
        this.tooltipOptObject =  {
         marker: marker,
         data: data,
         tooltipOpt: tooltipOpt,
         infoWindow: infoWindow,
         ind: ind,
         type: 'open', 
        }
        let htmlData = ''
        if (!data?.tooltip?.length) {
          return;
        }
        else{
          this.tooltipHoverEmitter.emit(this.tooltipOptObject);
        const colLength: any = tooltipOpt?.length ? (tooltipOpt?.length < 2 ? 12 : ((tooltipOpt?.length < 3) ? 6 : ((tooltipOpt?.length < 4) ? 4 : tooltipOpt?.length < 13 ? 3 : 2))) : 0;
        for (const eachLabelVal of data?.tooltip) {
          htmlData = htmlData + (tooltipOpt?.length && tooltipOpt?.includes(eachLabelVal?.key) ? `<div class="col-${colLength} pl-2 pr-0 m-0 mt-1">
          <span class="span-minified">${eachLabelVal['label']}</span>
          <p class="inter-medium mb-0" style="color: ${eachLabelVal?.color ? eachLabelVal?.color : '#000'}">${eachLabelVal['value']}</p>
          </div>`: '');
        }
        if (htmlData) {
          htmlData = '<div class="row m-0">' + htmlData + '</div>';
          infoWindow.setContent(htmlData);
          if (isPolyline) {
            infoWindow.setPosition(e.latLng);
          }
          infoWindow.open({
            anchor: marker,
            map: this.mapInstance,
          });
        } 
      }
      });
      google.maps.event.addListener(marker, "mouseout", (e: any) => {
        this.tooltipHoverEmitter.emit({type: 'close', ind: ind, data: data});
        infoWindow.close();
      });
    } catch (tooltipErr) {
      console.error(tooltipErr);
    }
  }
  openTooltip(tooltipObj: any) {
    let htmlData = ''
    if (!tooltipObj?.eachMarker?.tooltip?.length) {
      return;
    }
    const colLength: any = tooltipObj['tooltipOpt']?.length ? (tooltipObj['tooltipOpt']?.length < 2 ? 12 : ((tooltipObj['tooltipOpt']?.length < 3) ? 6 : ((tooltipObj['tooltipOpt']?.length < 4) ? 4 : tooltipObj['tooltipOpt']?.length < 13 ? 3 : 2))) : 0;
    for (const eachLabelVal of tooltipObj?.eachMarker?.tooltip) {
      htmlData = htmlData + (tooltipObj['tooltipOpt']?.length && tooltipObj['tooltipOpt']?.includes(eachLabelVal?.key) ? `<div class="col-${colLength} pl-2 pr-0 m-0 mt-1">
        <span class="span-minified">${eachLabelVal['label']}</span>
        <p class="inter-medium mb-0" style="color: ${eachLabelVal?.color ? eachLabelVal?.color : '#000'}">${eachLabelVal['value']}</p>
        </div>`: '');
    }
    if (htmlData) {
      htmlData = '<div class="row m-0">' + htmlData + '</div>';
      tooltipObj['infoWindow'].setContent(htmlData);
      tooltipObj['infoWindow'].open({
        anchor: tooltipObj['marker'],
        map: this.mapInstance,
      });
    }
  }



  getCopy = (obj: any) => obj ? JSON.parse(JSON.stringify(obj)) : obj;

  changeMapType(type: any) {
    try {
      if (!this.mapInstance) {
        return;
      }
      this.mapOptions.activeMapType = type;
      if (type === null) {
        this.mapInstance.setMapTypeId('roadmap');
      }
      else {
        this.mapInstance.setMapTypeId(type);
      }
    } catch (error) {
      console.log(error);
    }
  }

  changeOptions(type: any) {
    try {
      this.mapOptions.selectedVisualType = type;
      this.visualTypeEmitter.emit(type);
    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy() {
    try {
      this.mapInstance = null;
    } catch (desErr) {
      console.error(desErr);
    }
  }
  
  getMapPosition() {
    if (!this.mapInstance) {
      return {};
    }
    const payload: any = {
      zoom: this.mapInstance?.getZoom() || null,
      center: this.mapInstance?.getCenter() || null,
      tilt: this.mapInstance?.getTilt() || null,
    }
    return payload || {};
  }
}
