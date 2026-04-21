require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Search",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapGallery"
], function(
    Map, MapView, FeatureLayer,
    ScaleBar, Legend, Search, LayerList, BasemapGallery
){
    // 1. 创建地图
    var map = new Map({
        basemap: "streets"
    });

    // 2. 创建地图视图
    var view = new MapView({
        container: "map",
        map: map,
        center: [116.40, 39.90], // 北京中心点
        zoom: 12
    });

    // 3. 添加公共专题数据（城市点位）
    var citiesLayer = new FeatureLayer({
        url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/WorldCities/FeatureServer/0"
    });
    map.add(citiesLayer);

    // 4. 添加 比例尺 控件
    var scaleBar = new ScaleBar({
        view: view,
        unit: "metric"
    });
    view.ui.add(scaleBar, "bottom-left");

    // 5. 添加 图例 控件
    var legend = new Legend({
        view: view
    });
    view.ui.add(legend, "top-right");

    // 6. 添加 搜索 控件
    var search = new Search({
        view: view
    });
    view.ui.add(search, "top-left");

    // 7. 添加 图层列表 控件
    var layerList = new LayerList({
        view: view
    });
    view.ui.add(layerList, "top-right");

    // 8. 添加 底图切换 控件
    var basemapGallery = new BasemapGallery({
        view: view,
        container: "basemapGallery"
    });
});