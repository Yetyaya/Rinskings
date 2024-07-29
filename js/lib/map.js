(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
  key: "AIzaSyD03tEY86DEARGYKBLDy9cXR8gpVF0empc",
  v: "weekly"
});

let map;
async function initMap(option) {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary('marker');

  //- 地圖色彩樣式
  const styledMapType = new google.maps.StyledMapType(
    [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#EFF0EB"
          }
        ]
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            color: "#af8141"
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#523735"
          }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f1e6"
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#c9b2a6"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#e5d9c2"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#ae9e90"
          }
        ]
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [
          {
            color: "#ebe1c6"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#e1dad1"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#93817c"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#c9d397"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#447530"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#FFFFFF"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#f8c967"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#e9bc62"
          }
        ]
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [
          {
            color: "#e98d58"
          }
        ]
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#db8555"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#806b63"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#8f7d77"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#ebe3cd"
          }
        ]
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#8fcae5"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#92998d"
          }
        ]
      }
    ],
    { name: 'Styled Map' }
  );

  //- 地點標記
  const pin = new PinElement({
    scale: 1.25
  });
  const pin2 = new PinElement({
    scale: 1.25
  });


  if (option == 'all') {
    //- 地圖位置
    map = new Map(document.getElementById("map"), {
      center: { lat: 24.1458, lng: 120.6624557 },
      zoom: 18,
      mapId: '4504f8b37365c3d1',
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
      }
    });

    const marker = new AdvancedMarkerElement({
      map,
      position: { lat: 24.146673, lng: 120.662757 },
      title: "台中向上店",
      content: pin.element
    });
    const marker2 = new AdvancedMarkerElement({
      map,
      position: { lat: 24.144589335241, lng: 120.66253523806395 },
      title: "審計新村攤位",
      content: pin2.element
    });
  } else if (option == 'store1') {
    map = new Map(document.getElementById("map"), {
      center: { lat: 24.146673, lng: 120.662757 },
      zoom: 18,
      mapId: '4504f8b37365c3d1',
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
      }
    });
    const marker = new AdvancedMarkerElement({
      map,
      position: { lat: 24.146673, lng: 120.662757 },
      title: "台中向上店",
      content: pin.element
    });
  } else if (option == 'store2') {
    map = new Map(document.getElementById("map"), {
      center: { lat: 24.144589335241, lng: 120.66253523806395 },
      zoom: 18,
      mapId: '4504f8b37365c3d1',
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
      }
    });
    const marker2 = new AdvancedMarkerElement({
      map,
      position: { lat: 24.144589335241, lng: 120.66253523806395 },
      title: "審計新村攤位",
      content: pin2.element
    });
  }
  
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}

mixins.map = {
  data() {
    return {

    }
  },
  mounted() {
    initMap('all');
  },
  methods: {
    updateMap(store) {
      switch (store) {
        case 'store1':
          initMap('store1');
          break;
        case 'store2':
          initMap('store2');
          break;
        default:
          initMap('all');
          break;
      }
    }
  }
};
