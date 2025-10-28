var wms_layers = [];

var format_Permetro_0 = new ol.format.GeoJSON();
var features_Permetro_0 = format_Permetro_0.readFeatures(json_Permetro_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Permetro_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Permetro_0.addFeatures(features_Permetro_0);
var lyr_Permetro_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Permetro_0, 
                style: style_Permetro_0,
                popuplayertitle: 'Perímetro',
                interactive: false,
                title: '<img src="styles/legend/Permetro_0.png" /> Perímetro'
            });
var format_Calles_1 = new ol.format.GeoJSON();
var features_Calles_1 = format_Calles_1.readFeatures(json_Calles_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Calles_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Calles_1.addFeatures(features_Calles_1);
var lyr_Calles_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Calles_1, 
                style: style_Calles_1,
                popuplayertitle: 'Calles',
                interactive: false,
                title: '<img src="styles/legend/Calles_1.png" /> Calles'
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
                interactive: false,
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
    <img src="styles/legend/Baches_3_0.png" /> Estable<br />\
    <img src="styles/legend/Baches_3_1.png" /> Grave<br />\
    <img src="styles/legend/Baches_3_2.png" /> Sin foto<br />' });
var format_Puntosdeinters_4 = new ol.format.GeoJSON();
var features_Puntosdeinters_4 = format_Puntosdeinters_4.readFeatures(json_Puntosdeinters_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntosdeinters_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntosdeinters_4.addFeatures(features_Puntosdeinters_4);
var lyr_Puntosdeinters_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntosdeinters_4, 
                style: style_Puntosdeinters_4,
                popuplayertitle: 'Puntos de interés',
                interactive: true,
    title: 'Puntos de interés<br />\
    <img src="styles/legend/Puntosdeinters_4_0.png" /> Escuela<br />\
    <img src="styles/legend/Puntosdeinters_4_1.png" /> Salud<br />' });
var group_Redvial = new ol.layer.Group({
                                layers: [lyr_Calles_1,],
                                fold: 'open',
                                title: 'Red vial'});
var group_BaseHurlingham = new ol.layer.Group({
                                layers: [lyr_Permetro_0,],
                                fold: 'open',
                                title: 'Base Hurlingham'});

lyr_Permetro_0.setVisible(true);lyr_Calles_1.setVisible(true);lyr_CoelctivosHurlingham_2.setVisible(true);lyr_Baches_3.setVisible(true);lyr_Puntosdeinters_4.setVisible(true);
var layersList = [group_BaseHurlingham,group_Redvial,lyr_CoelctivosHurlingham_2,lyr_Baches_3,lyr_Puntosdeinters_4];
lyr_Permetro_0.set('fieldAliases', {'id': 'id', 'Area': 'Area', });
lyr_Calles_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nombre': 'nombre', 'Tramo': 'Tramo', 'Localidad': 'Localidad', 'tipo': 'tipo', 'material': 'material', 'cuadras': 'cuadras', 'baches_relevados': 'baches_relevados', 'intervenciones_bacheo': 'intervenciones_bacheo', '@id': '@id', 'area': 'area', 'lanes': 'lanes', 'maxspeed': 'maxspeed', 'alt_name': 'alt_name', 'lane_markings': 'lane_markings', 'oneway': 'oneway', 'ref': 'ref', 'sidewalk': 'sidewalk', 'access': 'access', 'source': 'source', 'bicycle': 'bicycle', 'bridge': 'bridge', 'width': 'width', 'lit': 'lit', 'noref': 'noref', 'turn:lanes': 'turn:lanes', 'payment:cash:lanes': 'payment:cash:lanes', 'payment:credit_cards': 'payment:credit_cards', 'payment:telepase:lanes': 'payment:telepase:lanes', 'toll': 'toll', 'destination': 'destination', 'embankment': 'embankment', 'destination:street': 'destination:street', 'maxheight': 'maxheight', 'destination:ref': 'destination:ref', 'motor_vehicle': 'motor_vehicle', 'old_name': 'old_name', 'incline': 'incline', 'ramp': 'ramp', 'foot': 'foot', 'service': 'service', 'sport': 'sport', 'hgv': 'hgv', 'payment:telepase': 'payment:telepase', 'covered': 'covered', 'description': 'description', 'maxweight:signed': 'maxweight:signed', 'lane_markings_1': 'lane_markings_1', 'junction': 'junction', 'construction': 'construction', });
lyr_CoelctivosHurlingham_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'LINEA': 'LINEA', 'RAMAL': 'RAMAL', 'SENTIDO': 'SENTIDO', 'JURISDICCI': 'JURISDICCI', 'id_2': 'id_2', 'Area': 'Area', 'layer': 'layer', 'path': 'path', });
lyr_Baches_3.set('fieldAliases', {'Barrio': 'Barrio', 'Empresa': 'Empresa', 'Objetivo': 'Objetivo', 'Calle': 'Calle', 'Altura': 'Altura', 'Entre calle 1': 'Entre calle 1', 'Entre calle 2': 'Entre calle 2', 'Material': 'Material', 'Foto': 'Foto', 'Gravedad': 'Gravedad', 'Planificación': 'Planificación', 'Tipo': 'Tipo', 'Profundidad': 'Profundidad', 'Asf. Proy. propia': 'Asf. Proy. propia', 'Asf. Proy. 2': 'Asf. Proy. 2', 'Asf. Consumido': 'Asf. Consumido', 'Tn (día)': 'Tn (día)', 'Hor. Proy. propia': 'Hor. Proy. propia', 'Hor. Proy. 2': 'Hor. Proy. 2', 'Hor. Consumido': 'Hor. Consumido', 'Proy. propia': 'Proy. propia', 'Proy. 2': 'Proy. 2', 'Consumido': 'Consumido', 'Estado': 'Estado', 'Cordones/ terminaciones': 'Cordones/ terminaciones', 'Inicio': 'Inicio', 'Fin': 'Fin', 'Duración': 'Duración', 'Inicio_1': 'Inicio_1', 'Fin_1': 'Fin_1', 'Duración_1': 'Duración_1', 'Camiones': 'Camiones', 'Maquinaria': 'Maquinaria', 'Semana': 'Semana', 'Inicio semana': 'Inicio semana', 'Foto resuelto': 'Foto resuelto', 'Dirección entera': 'Dirección entera', 'Año': 'Año', 'ID': 'ID', 'X': 'X', 'Y': 'Y', 'm2 total (proyectado/consumido)': 'm2 total (proyectado/consumido)', 'Localidad': 'Localidad', });
lyr_Puntosdeinters_4.set('fieldAliases', {'Tipo': 'Tipo', 'Nombre': 'Nombre', 'Subtipo': 'Subtipo', 'Y': 'Y', 'X': 'X', 'Coordenadas': 'Coordenadas', });
lyr_Permetro_0.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', });
lyr_Calles_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nombre': 'TextEdit', 'Tramo': 'Range', 'Localidad': 'TextEdit', 'tipo': 'TextEdit', 'material': 'TextEdit', 'cuadras': 'TextEdit', 'baches_relevados': 'TextEdit', 'intervenciones_bacheo': 'Range', '@id': 'TextEdit', 'area': 'TextEdit', 'lanes': 'TextEdit', 'maxspeed': 'TextEdit', 'alt_name': 'TextEdit', 'lane_markings': 'TextEdit', 'oneway': 'TextEdit', 'ref': 'TextEdit', 'sidewalk': 'TextEdit', 'access': 'TextEdit', 'source': 'TextEdit', 'bicycle': 'TextEdit', 'bridge': 'TextEdit', 'width': 'TextEdit', 'lit': 'CheckBox', 'noref': 'CheckBox', 'turn:lanes': 'TextEdit', 'payment:cash:lanes': 'TextEdit', 'payment:credit_cards': 'TextEdit', 'payment:telepase:lanes': 'TextEdit', 'toll': 'CheckBox', 'destination': 'TextEdit', 'embankment': 'CheckBox', 'destination:street': 'TextEdit', 'maxheight': 'TextEdit', 'destination:ref': 'TextEdit', 'motor_vehicle': 'TextEdit', 'old_name': 'TextEdit', 'incline': 'TextEdit', 'ramp': 'CheckBox', 'foot': 'CheckBox', 'service': 'TextEdit', 'sport': 'TextEdit', 'hgv': 'CheckBox', 'payment:telepase': 'TextEdit', 'covered': 'CheckBox', 'description': 'TextEdit', 'maxweight:signed': 'CheckBox', 'lane_markings_1': 'CheckBox', 'junction': 'TextEdit', 'construction': 'TextEdit', });
lyr_CoelctivosHurlingham_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'LINEA': 'TextEdit', 'RAMAL': 'TextEdit', 'SENTIDO': 'TextEdit', 'JURISDICCI': 'TextEdit', 'id_2': 'TextEdit', 'Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Baches_3.set('fieldImages', {'Barrio': 'TextEdit', 'Empresa': 'TextEdit', 'Objetivo': 'TextEdit', 'Calle': 'TextEdit', 'Altura': 'TextEdit', 'Entre calle 1': 'TextEdit', 'Entre calle 2': 'TextEdit', 'Material': 'TextEdit', 'Foto': 'TextEdit', 'Gravedad': 'TextEdit', 'Planificación': 'TextEdit', 'Tipo': 'TextEdit', 'Profundidad': 'TextEdit', 'Asf. Proy. propia': 'TextEdit', 'Asf. Proy. 2': 'TextEdit', 'Asf. Consumido': 'Range', 'Tn (día)': 'TextEdit', 'Hor. Proy. propia': 'TextEdit', 'Hor. Proy. 2': 'Range', 'Hor. Consumido': 'TextEdit', 'Proy. propia': 'TextEdit', 'Proy. 2': 'TextEdit', 'Consumido': 'TextEdit', 'Estado': 'TextEdit', 'Cordones/ terminaciones': 'TextEdit', 'Inicio': 'TextEdit', 'Fin': 'TextEdit', 'Duración': 'TextEdit', 'Inicio_1': 'TextEdit', 'Fin_1': 'TextEdit', 'Duración_1': 'TextEdit', 'Camiones': 'TextEdit', 'Maquinaria': 'CheckBox', 'Semana': 'Range', 'Inicio semana': 'TextEdit', 'Foto resuelto': 'TextEdit', 'Dirección entera': 'TextEdit', 'Año': 'Range', 'ID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'm2 total (proyectado/consumido)': 'TextEdit', 'Localidad': 'TextEdit', });
lyr_Puntosdeinters_4.set('fieldImages', {'Tipo': 'TextEdit', 'Nombre': 'TextEdit', 'Subtipo': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Coordenadas': 'TextEdit', });
lyr_Permetro_0.set('fieldLabels', {'id': 'hidden field', 'Area': 'hidden field', });
lyr_Calles_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'nombre': 'hidden field', 'Tramo': 'hidden field', 'Localidad': 'hidden field', 'tipo': 'hidden field', 'material': 'hidden field', 'cuadras': 'hidden field', 'baches_relevados': 'hidden field', 'intervenciones_bacheo': 'hidden field', '@id': 'hidden field', 'area': 'hidden field', 'lanes': 'hidden field', 'maxspeed': 'hidden field', 'alt_name': 'hidden field', 'lane_markings': 'hidden field', 'oneway': 'hidden field', 'ref': 'hidden field', 'sidewalk': 'hidden field', 'access': 'hidden field', 'source': 'hidden field', 'bicycle': 'hidden field', 'bridge': 'hidden field', 'width': 'hidden field', 'lit': 'hidden field', 'noref': 'hidden field', 'turn:lanes': 'hidden field', 'payment:cash:lanes': 'hidden field', 'payment:credit_cards': 'hidden field', 'payment:telepase:lanes': 'hidden field', 'toll': 'hidden field', 'destination': 'hidden field', 'embankment': 'hidden field', 'destination:street': 'hidden field', 'maxheight': 'hidden field', 'destination:ref': 'hidden field', 'motor_vehicle': 'hidden field', 'old_name': 'hidden field', 'incline': 'hidden field', 'ramp': 'hidden field', 'foot': 'hidden field', 'service': 'hidden field', 'sport': 'hidden field', 'hgv': 'hidden field', 'payment:telepase': 'hidden field', 'covered': 'hidden field', 'description': 'hidden field', 'maxweight:signed': 'hidden field', 'lane_markings_1': 'hidden field', 'junction': 'hidden field', 'construction': 'hidden field', });
lyr_CoelctivosHurlingham_2.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'LINEA': 'hidden field', 'RAMAL': 'hidden field', 'SENTIDO': 'hidden field', 'JURISDICCI': 'hidden field', 'id_2': 'hidden field', 'Area': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Baches_3.set('fieldLabels', {'Barrio': 'hidden field', 'Empresa': 'hidden field', 'Objetivo': 'hidden field', 'Calle': 'hidden field', 'Altura': 'hidden field', 'Entre calle 1': 'hidden field', 'Entre calle 2': 'hidden field', 'Material': 'hidden field', 'Foto': 'inline label - visible with data', 'Gravedad': 'inline label - visible with data', 'Planificación': 'hidden field', 'Tipo': 'hidden field', 'Profundidad': 'hidden field', 'Asf. Proy. propia': 'hidden field', 'Asf. Proy. 2': 'hidden field', 'Asf. Consumido': 'hidden field', 'Tn (día)': 'hidden field', 'Hor. Proy. propia': 'hidden field', 'Hor. Proy. 2': 'hidden field', 'Hor. Consumido': 'hidden field', 'Proy. propia': 'hidden field', 'Proy. 2': 'hidden field', 'Consumido': 'hidden field', 'Estado': 'hidden field', 'Cordones/ terminaciones': 'hidden field', 'Inicio': 'hidden field', 'Fin': 'hidden field', 'Duración': 'hidden field', 'Inicio_1': 'hidden field', 'Fin_1': 'hidden field', 'Duración_1': 'hidden field', 'Camiones': 'hidden field', 'Maquinaria': 'hidden field', 'Semana': 'hidden field', 'Inicio semana': 'hidden field', 'Foto resuelto': 'hidden field', 'Dirección entera': 'header label - always visible', 'Año': 'hidden field', 'ID': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'm2 total (proyectado/consumido)': 'hidden field', 'Localidad': 'hidden field', });
lyr_Puntosdeinters_4.set('fieldLabels', {'Tipo': 'inline label - visible with data', 'Nombre': 'header label - visible with data', 'Subtipo': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Coordenadas': 'hidden field', });
lyr_Puntosdeinters_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});