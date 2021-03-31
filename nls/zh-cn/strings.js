define({
  "_widgetLabel": "批处理属性编辑器",
  "widgetIntroSelectByArea": "请使用以下工具之一以创建要更新的所选要素集。 如果行<font class='maxRecordInIntro'>突出显示</font>，则已超出最大记录数。",
  "widgetIntroSelectByFeature": "使用以下工具从 <font class='layerInIntro'>${0}</font> 图层中选择要素。 将使用此要素来选择并更新所有相交要素。 如果行<font class='maxRecordInIntro'>突出显示</font>，则已超出最大记录数。",
  "widgetIntroSelectByFeatureQuery": "使用以下工具从 <font class='layerInIntro'>${0}</font> 中选择要素。 将使用此要素的 <font class='layerInIntro'>${1}</font> 属性来查询以下图层并更新生成的要素。 如果行<font class='maxRecordInIntro'>突出显示</font>，则已超出最大记录数。",
  "widgetIntroSelectByQuery": "输入用于创建选择集的值。 如果行<font class='maxRecordInIntro'>突出显示</font>，则已超出最大记录数。",
  "layerTable": {
    "colLabel": "图层名称",
    "numSelected": "#",
    "colSyncStatus": ""
  },
  "noConfiguredLayers": "未配置可编辑图层",
  "editorPopupTitle": "批处理属性编辑器",
  "editorPopupSaveBtn": "保存",
  "editorPopupMultipleValues": "",
  "clear": "清除",
  "featuresUpdated": "已更新 ${0} / ${1} 要素",
  "featuresSelected": "已选定 ${0} 要素",
  "featuresSkipped": "已忽略",
  "search": "搜索",
  "queryInput": "输入要查询的值",
  "noFilterTip": "在未定义过滤表达式的情况下，此查询任务会列出指定数据源中的所有要素。",
  "setFilterTip": "请正确设置过滤器。",
  "filterPopup": "过滤图层",
  "filterAppend": "如果 web 地图中已存在此图层的过滤器",
  "filterAppendOR": "向现有地图过滤器追加任意表达式",
  "filterAppendAND": "向现有地图过滤器追加所有表达式",
  "cancel": "取消",
  "noValue": "无值",
  "emptyString": "空字符串",
  "existingValue": "保留现有值",
  "newDate": "新日期",
  "valueChooser": "选择/键入值",
  "ok": "确定",
  "drawBox": {
    "point": "点",
    "line": "线",
    "polyline": "折线",
    "freehandPolyline": "手绘折线",
    "extent": "范围",
    "polygon": "面",
    "freehandPolygon": "手绘面",
    "clear": "清除",
    "addPointToolTip": "单击以在此区域中选择",
    "addShapeToolTip": "绘制形状以选择要素",
    "freehandToolTip": "按住并绘制形状以选择要素",
    "startToolTip": "绘制形状以选择要素"
  },
  "errors": {
    "layerNotFound": "地图中未发现 ID为 ${1} 的图层 ${0}，地图可能在微件配置时发生了更改",
    "queryNullID": "${0} 的要素返回了无效 ID",
    "noSelectedLayers": "所选图层中未含有要更新的记录",
    "inputValueError": "表单中的无效值",
    "saveError": "无法保存 ${0} 要素和向控制台添加的详细信息",
    "requiredValue": "所需值"
  }
});