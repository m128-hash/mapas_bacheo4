var wms_layers = [];

var format_Calles_0 = new ol.format.GeoJSON();
var features_Calles_0 = format_Calles_0.readFeatures(json_Calles_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Calles_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Calles_0.addFeatures(features_Calles_0);
var lyr_Calles_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Calles_0, 
                style: style_Calles_0,
                popuplayertitle: 'Calles',
                interactive: false,
                title: '<img src="styles/legend/Calles_0.png" /> Calles'
            });
var format_Barrios_1 = new ol.format.GeoJSON();
var features_Barrios_1 = format_Barrios_1.readFeatures(json_Barrios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barrios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barrios_1.addFeatures(features_Barrios_1);
var lyr_Barrios_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barrios_1, 
                style: style_Barrios_1,
                popuplayertitle: 'Barrios',
                interactive: true,
                title: '<img src="styles/legend/Barrios_1.png" /> Barrios'
            });
var format_CoelctivosHurlingham_2 = new ol.format.GeoJSON();
var features_CoelctivosHurlingham_2 = format_CoelctivosHurlingham_2.readFeatures(json_CoelctivosHurlingham_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoelctivosHurlingham_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoelctivosHurlingham_2.addFeatures(features_CoelctivosHurlingham_2);
var lyr_CoelctivosHurlingham_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoelctivosHurlingham_2, 
                style: style_CoelctivosHurlingham_2,
                popuplayertitle: 'Coelctivos Hurlingham',
                interactive: true,
                title: '<img src="styles/legend/CoelctivosHurlingham_2.png" /> Coelctivos Hurlingham'
            });
var format_Baches_3 = new ol.format.GeoJSON();
var features_Baches_3 = format_Baches_3.readFeatures(json_Baches_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Baches_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Baches_3.addFeatures(features_Baches_3);
var lyr_Baches_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Baches_3, 
                style: style_Baches_3,
                popuplayertitle: 'Baches',
                interactive: true,
    title: 'Baches<br />\
    <img src="styles/legend/Baches_3_0.png" /> Grave<br />\
    <img src="styles/legend/Baches_3_1.png" /> Estable<br />' });
var group_Trnsito = new ol.layer.Group({
                                layers: [lyr_CoelctivosHurlingham_2,],
                                fold: 'close',
                                title: 'Tránsito'});
var group_BaseHurlingham = new ol.layer.Group({
                                layers: [lyr_Barrios_1,],
                                fold: 'open',
                                title: 'Base Hurlingham'});
var group_Redvial = new ol.layer.Group({
                                layers: [lyr_Calles_0,],
                                fold: 'open',
                                title: 'Red vial'});

lyr_Calles_0.setVisible(true);lyr_Barrios_1.setVisible(true);lyr_CoelctivosHurlingham_2.setVisible(true);lyr_Baches_3.setVisible(true);
var layersList = [group_Redvial,group_BaseHurlingham,group_Trnsito,lyr_Baches_3];
lyr_Calles_0.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nombre': 'nombre', 'Tramo': 'Tramo', 'Localidad': 'Localidad', 'tipo': 'tipo', 'material': 'material', 'cuadras': 'cuadras', 'baches_relevados': 'baches_relevados', 'intervenciones_bacheo': 'intervenciones_bacheo', '@id': '@id', 'area': 'area', 'lanes': 'lanes', 'maxspeed': 'maxspeed', 'alt_name': 'alt_name', 'lane_markings': 'lane_markings', 'oneway': 'oneway', 'ref': 'ref', 'sidewalk': 'sidewalk', 'access': 'access', 'source': 'source', 'bicycle': 'bicycle', 'bridge': 'bridge', 'width': 'width', 'lit': 'lit', 'noref': 'noref', 'turn:lanes': 'turn:lanes', 'payment:cash:lanes': 'payment:cash:lanes', 'payment:credit_cards': 'payment:credit_cards', 'payment:telepase:lanes': 'payment:telepase:lanes', 'toll': 'toll', 'destination': 'destination', 'embankment': 'embankment', 'destination:street': 'destination:street', 'maxheight': 'maxheight', 'destination:ref': 'destination:ref', 'motor_vehicle': 'motor_vehicle', 'old_name': 'old_name', 'incline': 'incline', 'ramp': 'ramp', 'foot': 'foot', 'service': 'service', 'sport': 'sport', 'hgv': 'hgv', 'payment:telepase': 'payment:telepase', 'covered': 'covered', 'description': 'description', 'maxweight:signed': 'maxweight:signed', 'lane_markings_1': 'lane_markings_1', 'junction': 'junction', 'construction': 'construction', });
lyr_Barrios_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CoelctivosHurlingham_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'LINEA': 'LINEA', 'RAMAL': 'RAMAL', 'SENTIDO': 'SENTIDO', 'JURISDICCI': 'JURISDICCI', 'id_2': 'id_2', 'Area': 'Area', 'layer': 'layer', 'path': 'path', });
lyr_Baches_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'X': 'X', 'Y': 'Y', '_Barrio': '_Barrio', '_Empresa': '_Empresa', '_Objetivo': '_Objetivo', '_Calle': '_Calle', '_Altura': '_Altura', '_Entre calle 1': '_Entre calle 1', '_Entre calle 2': '_Entre calle 2', '_Material': '_Material', '_Foto': '_Foto', '_Gravedad': '_Gravedad', '_Planificación': '_Planificación', '_Tipo': '_Tipo', '_Profundidad': '_Profundidad', '_Asf. Proy. propia': '_Asf. Proy. propia', '_Asf. Proy. 2': '_Asf. Proy. 2', '_Asf. Consumido': '_Asf. Consumido', '_Tn (día)': '_Tn (día)', '_Hor. Proy. propia': '_Hor. Proy. propia', '_Hor. Proy. 2': '_Hor. Proy. 2', '_Hor. Consumido': '_Hor. Consumido', '_Proy. propia': '_Proy. propia', '_Proy. 2': '_Proy. 2', '_Consumido': '_Consumido', '_Estado': '_Estado', '_Cordones/ terminaciones': '_Cordones/ terminaciones', '_Inicio': '_Inicio', '_Fin': '_Fin', '_Columna 28': '_Columna 28', '_Columna 29': '_Columna 29', '_Fin_1': '_Fin_1', '_Duración': '_Duración', '_Camiones': '_Camiones', '_Maquinaria': '_Maquinaria', '_Semana': '_Semana', '_Inicio semana': '_Inicio semana', '_Foto resuelto': '_Foto resuelto', '_Dirección entera': '_Dirección entera', '_Año': '_Año', '_X': '_X', '_Y': '_Y', '_m2 total (proyectado/consumido)': '_m2 total (proyectado/consumido)', '_Localidad': '_Localidad', });
lyr_Calles_0.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nombre': 'TextEdit', 'Tramo': 'Range', 'Localidad': 'TextEdit', 'tipo': 'TextEdit', 'material': 'TextEdit', 'cuadras': 'TextEdit', 'baches_relevados': 'TextEdit', 'intervenciones_bacheo': 'Range', '@id': 'TextEdit', 'area': 'TextEdit', 'lanes': 'TextEdit', 'maxspeed': 'TextEdit', 'alt_name': 'TextEdit', 'lane_markings': 'TextEdit', 'oneway': 'TextEdit', 'ref': 'TextEdit', 'sidewalk': 'TextEdit', 'access': 'TextEdit', 'source': 'TextEdit', 'bicycle': 'TextEdit', 'bridge': 'TextEdit', 'width': 'TextEdit', 'lit': 'CheckBox', 'noref': 'CheckBox', 'turn:lanes': 'TextEdit', 'payment:cash:lanes': 'TextEdit', 'payment:credit_cards': 'TextEdit', 'payment:telepase:lanes': 'TextEdit', 'toll': 'CheckBox', 'destination': 'TextEdit', 'embankment': 'CheckBox', 'destination:street': 'TextEdit', 'maxheight': 'TextEdit', 'destination:ref': 'TextEdit', 'motor_vehicle': 'TextEdit', 'old_name': 'TextEdit', 'incline': 'TextEdit', 'ramp': 'CheckBox', 'foot': 'CheckBox', 'service': 'TextEdit', 'sport': 'TextEdit', 'hgv': 'CheckBox', 'payment:telepase': 'TextEdit', 'covered': 'CheckBox', 'description': 'TextEdit', 'maxweight:signed': 'CheckBox', 'lane_markings_1': 'CheckBox', 'junction': 'TextEdit', 'construction': 'TextEdit', });
lyr_Barrios_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CoelctivosHurlingham_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'LINEA': 'TextEdit', 'RAMAL': 'TextEdit', 'SENTIDO': 'TextEdit', 'JURISDICCI': 'TextEdit', 'id_2': 'TextEdit', 'Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Baches_3.set('fieldImages', {'fid': '', 'ID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', '_Barrio': 'TextEdit', '_Empresa': 'TextEdit', '_Objetivo': 'TextEdit', '_Calle': 'TextEdit', '_Altura': 'TextEdit', '_Entre calle 1': 'TextEdit', '_Entre calle 2': 'TextEdit', '_Material': 'TextEdit', '_Foto': 'TextEdit', '_Gravedad': 'TextEdit', '_Planificación': 'TextEdit', '_Tipo': 'TextEdit', '_Profundidad': 'TextEdit', '_Asf. Proy. propia': 'TextEdit', '_Asf. Proy. 2': 'TextEdit', '_Asf. Consumido': 'TextEdit', '_Tn (día)': 'TextEdit', '_Hor. Proy. propia': 'TextEdit', '_Hor. Proy. 2': 'TextEdit', '_Hor. Consumido': 'TextEdit', '_Proy. propia': 'TextEdit', '_Proy. 2': 'TextEdit', '_Consumido': 'TextEdit', '_Estado': 'TextEdit', '_Cordones/ terminaciones': 'TextEdit', '_Inicio': 'TextEdit', '_Fin': 'TextEdit', '_Columna 28': 'TextEdit', '_Columna 29': 'TextEdit', '_Fin_1': 'TextEdit', '_Duración': 'TextEdit', '_Camiones': 'TextEdit', '_Maquinaria': 'TextEdit', '_Semana': 'TextEdit', '_Inicio semana': 'TextEdit', '_Foto resuelto': 'TextEdit', '_Dirección entera': 'TextEdit', '_Año': 'TextEdit', '_X': 'TextEdit', '_Y': 'TextEdit', '_m2 total (proyectado/consumido)': 'TextEdit', '_Localidad': 'TextEdit', });
lyr_Calles_0.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'nombre': 'inline label - visible with data', 'Tramo': 'hidden field', 'Localidad': 'hidden field', 'tipo': 'hidden field', 'material': 'hidden field', 'cuadras': 'hidden field', 'baches_relevados': 'hidden field', 'intervenciones_bacheo': 'hidden field', '@id': 'hidden field', 'area': 'hidden field', 'lanes': 'hidden field', 'maxspeed': 'hidden field', 'alt_name': 'hidden field', 'lane_markings': 'hidden field', 'oneway': 'hidden field', 'ref': 'hidden field', 'sidewalk': 'hidden field', 'access': 'hidden field', 'source': 'hidden field', 'bicycle': 'hidden field', 'bridge': 'hidden field', 'width': 'hidden field', 'lit': 'hidden field', 'noref': 'hidden field', 'turn:lanes': 'hidden field', 'payment:cash:lanes': 'hidden field', 'payment:credit_cards': 'hidden field', 'payment:telepase:lanes': 'hidden field', 'toll': 'hidden field', 'destination': 'hidden field', 'embankment': 'hidden field', 'destination:street': 'hidden field', 'maxheight': 'hidden field', 'destination:ref': 'hidden field', 'motor_vehicle': 'hidden field', 'old_name': 'hidden field', 'incline': 'hidden field', 'ramp': 'hidden field', 'foot': 'hidden field', 'service': 'hidden field', 'sport': 'hidden field', 'hgv': 'hidden field', 'payment:telepase': 'hidden field', 'covered': 'hidden field', 'description': 'hidden field', 'maxweight:signed': 'hidden field', 'lane_markings_1': 'hidden field', 'junction': 'hidden field', 'construction': 'hidden field', });
lyr_Barrios_1.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CoelctivosHurlingham_2.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'LINEA': 'header label - always visible', 'RAMAL': 'hidden field', 'SENTIDO': 'hidden field', 'JURISDICCI': 'hidden field', 'id_2': 'hidden field', 'Area': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Baches_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', '_Barrio': 'hidden field', '_Empresa': 'hidden field', '_Objetivo': 'hidden field', '_Calle': 'hidden field', '_Altura': 'hidden field', '_Entre calle 1': 'hidden field', '_Entre calle 2': 'hidden field', '_Material': 'hidden field', '_Foto': 'inline label - visible with data', '_Gravedad': 'inline label - visible with data', '_Planificación': 'hidden field', '_Tipo': 'hidden field', '_Profundidad': 'hidden field', '_Asf. Proy. propia': 'hidden field', '_Asf. Proy. 2': 'hidden field', '_Asf. Consumido': 'hidden field', '_Tn (día)': 'hidden field', '_Hor. Proy. propia': 'hidden field', '_Hor. Proy. 2': 'hidden field', '_Hor. Consumido': 'hidden field', '_Proy. propia': 'hidden field', '_Proy. 2': 'hidden field', '_Consumido': 'hidden field', '_Estado': 'hidden field', '_Cordones/ terminaciones': 'hidden field', '_Inicio': 'hidden field', '_Fin': 'hidden field', '_Columna 28': 'hidden field', '_Columna 29': 'hidden field', '_Fin_1': 'hidden field', '_Duración': 'hidden field', '_Camiones': 'hidden field', '_Maquinaria': 'hidden field', '_Semana': 'hidden field', '_Inicio semana': 'hidden field', '_Foto resuelto': 'hidden field', '_Dirección entera': 'header label - visible with data', '_Año': 'hidden field', '_X': 'hidden field', '_Y': 'hidden field', '_m2 total (proyectado/consumido)': 'inline label - visible with data', '_Localidad': 'hidden field', });
lyr_Baches_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});