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
var format_Puntosdeinters_2 = new ol.format.GeoJSON();
var features_Puntosdeinters_2 = format_Puntosdeinters_2.readFeatures(json_Puntosdeinters_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntosdeinters_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntosdeinters_2.addFeatures(features_Puntosdeinters_2);
var lyr_Puntosdeinters_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntosdeinters_2, 
                style: style_Puntosdeinters_2,
                popuplayertitle: 'Puntos de interés',
                interactive: false,
    title: 'Puntos de interés<br />\
    <img src="styles/legend/Puntosdeinters_2_0.png" /> Escuela<br />\
    <img src="styles/legend/Puntosdeinters_2_1.png" /> Salud<br />' });
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
                                layers: [],
                                fold: 'close',
                                title: 'Tránsito'});
var group_BaseHurlingham = new ol.layer.Group({
                                layers: [lyr_Barrios_1,lyr_Puntosdeinters_2,],
                                fold: 'open',
                                title: 'Base Hurlingham'});
var group_Redvial = new ol.layer.Group({
                                layers: [lyr_Calles_0,],
                                fold: 'close',
                                title: 'Red vial'});

lyr_Calles_0.setVisible(true);lyr_Barrios_1.setVisible(true);lyr_Puntosdeinters_2.setVisible(true);lyr_Baches_3.setVisible(true);
var layersList = [group_Redvial,group_BaseHurlingham,lyr_Baches_3];
lyr_Calles_0.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nombre': 'nombre', 'Tramo': 'Tramo', 'Localidad': 'Localidad', 'tipo': 'tipo', 'material': 'material', 'cuadras': 'cuadras', 'baches_relevados': 'baches_relevados', 'intervenciones_bacheo': 'intervenciones_bacheo', '@id': '@id', 'area': 'area', 'lanes': 'lanes', 'maxspeed': 'maxspeed', 'alt_name': 'alt_name', 'lane_markings': 'lane_markings', 'oneway': 'oneway', 'ref': 'ref', 'sidewalk': 'sidewalk', 'access': 'access', 'source': 'source', 'bicycle': 'bicycle', 'bridge': 'bridge', 'width': 'width', 'lit': 'lit', 'noref': 'noref', 'turn:lanes': 'turn:lanes', 'payment:cash:lanes': 'payment:cash:lanes', 'payment:credit_cards': 'payment:credit_cards', 'payment:telepase:lanes': 'payment:telepase:lanes', 'toll': 'toll', 'destination': 'destination', 'embankment': 'embankment', 'destination:street': 'destination:street', 'maxheight': 'maxheight', 'destination:ref': 'destination:ref', 'motor_vehicle': 'motor_vehicle', 'old_name': 'old_name', 'incline': 'incline', 'ramp': 'ramp', 'foot': 'foot', 'service': 'service', 'sport': 'sport', 'hgv': 'hgv', 'payment:telepase': 'payment:telepase', 'covered': 'covered', 'description': 'description', 'maxweight:signed': 'maxweight:signed', 'lane_markings_1': 'lane_markings_1', 'junction': 'junction', 'construction': 'construction', });
lyr_Barrios_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Puntosdeinters_2.set('fieldAliases', {'Tipo': 'Tipo', 'Nombre': 'Nombre', 'Subtipo': 'Subtipo', 'Y': 'Y', 'X': 'X', 'Coordenadas': 'Coordenadas', });
lyr_Baches_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'X': 'X', 'Y': 'Y', '_Barrio': '_Barrio', '_Empresa': '_Empresa', '_Objetivo': '_Objetivo', '_Calle': '_Calle', '_Altura': '_Altura', '_Entre calle 1': '_Entre calle 1', '_Entre calle 2': '_Entre calle 2', '_Material': '_Material', '_Foto': '_Foto', '_Gravedad': '_Gravedad', '_Planificación': '_Planificación', '_Tipo': '_Tipo', '_Profundidad': '_Profundidad', '_Asf. Proy. propia': '_Asf. Proy. propia', '_Asf. Proy. 2': '_Asf. Proy. 2', '_Asf. Consumido': '_Asf. Consumido', '_Tn (día)': '_Tn (día)', '_Hor. Proy. propia': '_Hor. Proy. propia', '_Hor. Proy. 2': '_Hor. Proy. 2', '_Hor. Consumido': '_Hor. Consumido', '_Proy. propia': '_Proy. propia', '_Proy. 2': '_Proy. 2', '_Consumido': '_Consumido', '_Estado': '_Estado', '_Cordones/ terminaciones': '_Cordones/ terminaciones', '_Inicio': '_Inicio', '_Fin': '_Fin', '_Columna 28': '_Columna 28', '_Columna 29': '_Columna 29', '_Fin_1': '_Fin_1', '_Duración': '_Duración', '_Camiones': '_Camiones', '_Maquinaria': '_Maquinaria', '_Semana': '_Semana', '_Inicio semana': '_Inicio semana', '_Foto resuelto': '_Foto resuelto', '_Dirección entera': '_Dirección entera', '_Año': '_Año', '_X': '_X', '_Y': '_Y', '_m2 total (proyectado/consumido)': '_m2 total (proyectado/consumido)', '_Localidad': '_Localidad', 'Barrio': 'Barrio', 'Empresa': 'Empresa', 'Objetivo': 'Objetivo', 'Calle': 'Calle', 'Altura': 'Altura', 'Entre calle 1': 'Entre calle 1', 'Entre calle 2': 'Entre calle 2', 'Material': 'Material', 'Foto': 'Foto', 'Gravedad': 'Gravedad', 'Planificación': 'Planificación', 'Tipo': 'Tipo', 'Profundidad': 'Profundidad', 'Asf. Proy. propia': 'Asf. Proy. propia', 'Asf. Proy. 2': 'Asf. Proy. 2', 'Asf. Consumido': 'Asf. Consumido', 'Tn (día)': 'Tn (día)', 'Hor. Proy. propia': 'Hor. Proy. propia', 'Hor. Proy. 2': 'Hor. Proy. 2', 'Hor. Consumido': 'Hor. Consumido', 'Proy. propia': 'Proy. propia', 'Proy. 2': 'Proy. 2', 'Consumido': 'Consumido', 'Estado': 'Estado', 'Cordones/ terminaciones': 'Cordones/ terminaciones', 'Inicio': 'Inicio', 'Fin': 'Fin', 'Columna 28': 'Columna 28', 'Columna 29': 'Columna 29', 'Fin_1': 'Fin_1', 'Duración': 'Duración', 'Camiones': 'Camiones', 'Maquinaria': 'Maquinaria', 'Semana': 'Semana', 'Inicio semana': 'Inicio semana', 'Foto resuelto': 'Foto resuelto', 'Dirección entera': 'Dirección entera', 'Año': 'Año', 'm2 total (proyectado/consumido)': 'm2 total (proyectado/consumido)', 'Localidad': 'Localidad', });
lyr_Calles_0.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nombre': 'TextEdit', 'Tramo': 'Range', 'Localidad': 'TextEdit', 'tipo': 'TextEdit', 'material': 'TextEdit', 'cuadras': 'TextEdit', 'baches_relevados': 'TextEdit', 'intervenciones_bacheo': 'Range', '@id': 'TextEdit', 'area': 'TextEdit', 'lanes': 'TextEdit', 'maxspeed': 'TextEdit', 'alt_name': 'TextEdit', 'lane_markings': 'TextEdit', 'oneway': 'TextEdit', 'ref': 'TextEdit', 'sidewalk': 'TextEdit', 'access': 'TextEdit', 'source': 'TextEdit', 'bicycle': 'TextEdit', 'bridge': 'TextEdit', 'width': 'TextEdit', 'lit': 'CheckBox', 'noref': 'CheckBox', 'turn:lanes': 'TextEdit', 'payment:cash:lanes': 'TextEdit', 'payment:credit_cards': 'TextEdit', 'payment:telepase:lanes': 'TextEdit', 'toll': 'CheckBox', 'destination': 'TextEdit', 'embankment': 'CheckBox', 'destination:street': 'TextEdit', 'maxheight': 'TextEdit', 'destination:ref': 'TextEdit', 'motor_vehicle': 'TextEdit', 'old_name': 'TextEdit', 'incline': 'TextEdit', 'ramp': 'CheckBox', 'foot': 'CheckBox', 'service': 'TextEdit', 'sport': 'TextEdit', 'hgv': 'CheckBox', 'payment:telepase': 'TextEdit', 'covered': 'CheckBox', 'description': 'TextEdit', 'maxweight:signed': 'CheckBox', 'lane_markings_1': 'CheckBox', 'junction': 'TextEdit', 'construction': 'TextEdit', });
lyr_Barrios_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Puntosdeinters_2.set('fieldImages', {'Tipo': 'TextEdit', 'Nombre': 'TextEdit', 'Subtipo': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Coordenadas': 'TextEdit', });
lyr_Baches_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', '_Barrio': 'TextEdit', '_Empresa': 'TextEdit', '_Objetivo': 'TextEdit', '_Calle': 'TextEdit', '_Altura': 'TextEdit', '_Entre calle 1': 'TextEdit', '_Entre calle 2': 'TextEdit', '_Material': 'TextEdit', '_Foto': 'TextEdit', '_Gravedad': 'TextEdit', '_Planificación': 'TextEdit', '_Tipo': 'TextEdit', '_Profundidad': 'TextEdit', '_Asf. Proy. propia': 'TextEdit', '_Asf. Proy. 2': 'TextEdit', '_Asf. Consumido': 'TextEdit', '_Tn (día)': 'TextEdit', '_Hor. Proy. propia': 'TextEdit', '_Hor. Proy. 2': 'TextEdit', '_Hor. Consumido': 'TextEdit', '_Proy. propia': 'TextEdit', '_Proy. 2': 'TextEdit', '_Consumido': 'TextEdit', '_Estado': 'TextEdit', '_Cordones/ terminaciones': 'TextEdit', '_Inicio': 'TextEdit', '_Fin': 'TextEdit', '_Columna 28': 'TextEdit', '_Columna 29': 'TextEdit', '_Fin_1': 'TextEdit', '_Duración': 'TextEdit', '_Camiones': 'TextEdit', '_Maquinaria': 'TextEdit', '_Semana': 'TextEdit', '_Inicio semana': 'TextEdit', '_Foto resuelto': 'TextEdit', '_Dirección entera': 'TextEdit', '_Año': 'TextEdit', '_X': 'TextEdit', '_Y': 'TextEdit', '_m2 total (proyectado/consumido)': 'TextEdit', '_Localidad': 'TextEdit', 'Barrio': 'TextEdit', 'Empresa': 'TextEdit', 'Objetivo': 'TextEdit', 'Calle': 'TextEdit', 'Altura': 'TextEdit', 'Entre calle 1': 'TextEdit', 'Entre calle 2': 'TextEdit', 'Material': 'TextEdit', 'Foto': 'TextEdit', 'Gravedad': 'TextEdit', 'Planificación': 'TextEdit', 'Tipo': 'TextEdit', 'Profundidad': 'TextEdit', 'Asf. Proy. propia': 'TextEdit', 'Asf. Proy. 2': 'TextEdit', 'Asf. Consumido': 'TextEdit', 'Tn (día)': 'TextEdit', 'Hor. Proy. propia': 'TextEdit', 'Hor. Proy. 2': 'TextEdit', 'Hor. Consumido': 'TextEdit', 'Proy. propia': 'TextEdit', 'Proy. 2': 'TextEdit', 'Consumido': 'TextEdit', 'Estado': 'TextEdit', 'Cordones/ terminaciones': 'TextEdit', 'Inicio': 'TextEdit', 'Fin': 'TextEdit', 'Columna 28': 'TextEdit', 'Columna 29': 'TextEdit', 'Fin_1': 'TextEdit', 'Duración': 'TextEdit', 'Camiones': 'TextEdit', 'Maquinaria': 'TextEdit', 'Semana': 'TextEdit', 'Inicio semana': 'TextEdit', 'Foto resuelto': 'TextEdit', 'Dirección entera': 'TextEdit', 'Año': 'TextEdit', 'm2 total (proyectado/consumido)': 'TextEdit', 'Localidad': 'TextEdit', });
lyr_Calles_0.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'nombre': 'inline label - visible with data', 'Tramo': 'hidden field', 'Localidad': 'hidden field', 'tipo': 'hidden field', 'material': 'hidden field', 'cuadras': 'hidden field', 'baches_relevados': 'hidden field', 'intervenciones_bacheo': 'hidden field', '@id': 'hidden field', 'area': 'hidden field', 'lanes': 'hidden field', 'maxspeed': 'hidden field', 'alt_name': 'hidden field', 'lane_markings': 'hidden field', 'oneway': 'hidden field', 'ref': 'hidden field', 'sidewalk': 'hidden field', 'access': 'hidden field', 'source': 'hidden field', 'bicycle': 'hidden field', 'bridge': 'hidden field', 'width': 'hidden field', 'lit': 'hidden field', 'noref': 'hidden field', 'turn:lanes': 'hidden field', 'payment:cash:lanes': 'hidden field', 'payment:credit_cards': 'hidden field', 'payment:telepase:lanes': 'hidden field', 'toll': 'hidden field', 'destination': 'hidden field', 'embankment': 'hidden field', 'destination:street': 'hidden field', 'maxheight': 'hidden field', 'destination:ref': 'hidden field', 'motor_vehicle': 'hidden field', 'old_name': 'hidden field', 'incline': 'hidden field', 'ramp': 'hidden field', 'foot': 'hidden field', 'service': 'hidden field', 'sport': 'hidden field', 'hgv': 'hidden field', 'payment:telepase': 'hidden field', 'covered': 'hidden field', 'description': 'hidden field', 'maxweight:signed': 'hidden field', 'lane_markings_1': 'hidden field', 'junction': 'hidden field', 'construction': 'hidden field', });
lyr_Barrios_1.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Puntosdeinters_2.set('fieldLabels', {'Tipo': 'inline label - visible with data', 'Nombre': 'header label - visible with data', 'Subtipo': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Coordenadas': 'hidden field', });
lyr_Baches_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', '_Barrio': 'hidden field', '_Empresa': 'hidden field', '_Objetivo': 'hidden field', '_Calle': 'hidden field', '_Altura': 'hidden field', '_Entre calle 1': 'hidden field', '_Entre calle 2': 'hidden field', '_Material': 'hidden field', '_Foto': 'inline label - visible with data', '_Gravedad': 'inline label - visible with data', '_Planificación': 'hidden field', '_Tipo': 'hidden field', '_Profundidad': 'hidden field', '_Asf. Proy. propia': 'hidden field', '_Asf. Proy. 2': 'hidden field', '_Asf. Consumido': 'hidden field', '_Tn (día)': 'hidden field', '_Hor. Proy. propia': 'hidden field', '_Hor. Proy. 2': 'hidden field', '_Hor. Consumido': 'hidden field', '_Proy. propia': 'hidden field', '_Proy. 2': 'hidden field', '_Consumido': 'hidden field', '_Estado': 'hidden field', '_Cordones/ terminaciones': 'hidden field', '_Inicio': 'hidden field', '_Fin': 'hidden field', '_Columna 28': 'hidden field', '_Columna 29': 'hidden field', '_Fin_1': 'hidden field', '_Duración': 'hidden field', '_Camiones': 'hidden field', '_Maquinaria': 'hidden field', '_Semana': 'hidden field', '_Inicio semana': 'hidden field', '_Foto resuelto': 'hidden field', '_Dirección entera': 'header label - visible with data', '_Año': 'hidden field', '_X': 'hidden field', '_Y': 'hidden field', '_m2 total (proyectado/consumido)': 'inline label - visible with data', '_Localidad': 'hidden field', 'Barrio': 'no label', 'Empresa': 'no label', 'Objetivo': 'no label', 'Calle': 'no label', 'Altura': 'no label', 'Entre calle 1': 'no label', 'Entre calle 2': 'no label', 'Material': 'no label', 'Foto': 'no label', 'Gravedad': 'no label', 'Planificación': 'no label', 'Tipo': 'no label', 'Profundidad': 'no label', 'Asf. Proy. propia': 'no label', 'Asf. Proy. 2': 'no label', 'Asf. Consumido': 'no label', 'Tn (día)': 'no label', 'Hor. Proy. propia': 'no label', 'Hor. Proy. 2': 'no label', 'Hor. Consumido': 'no label', 'Proy. propia': 'no label', 'Proy. 2': 'no label', 'Consumido': 'no label', 'Estado': 'no label', 'Cordones/ terminaciones': 'no label', 'Inicio': 'no label', 'Fin': 'no label', 'Columna 28': 'no label', 'Columna 29': 'no label', 'Fin_1': 'no label', 'Duración': 'no label', 'Camiones': 'no label', 'Maquinaria': 'no label', 'Semana': 'no label', 'Inicio semana': 'no label', 'Foto resuelto': 'no label', 'Dirección entera': 'no label', 'Año': 'no label', 'm2 total (proyectado/consumido)': 'no label', 'Localidad': 'no label', });
lyr_Baches_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});