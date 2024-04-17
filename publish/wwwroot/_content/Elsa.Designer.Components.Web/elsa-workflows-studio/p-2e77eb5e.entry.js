import{r as e,h as t,H as s}from"./p-ee0b9025.js";import{e as i}from"./p-93cac3a6.js";import{c as a}from"./p-a3b5bd35.js";import{b as l,a as n,S as o}from"./p-c74b54ba.js";import{E as r}from"./p-d88cb309.js";import{a as c}from"./p-a3e4386d.js";import{a as d}from"./p-e77aabd2.js";import{L as h,W as u}from"./p-79414d9f.js";import{T as p}from"./p-821a7518.js";import{f as v}from"./p-34c33cf9.js";import"./p-971980b1.js";import"./p-82db2ff5.js";import"./p-949334ec.js";import"./p-80de33dc.js";import"./p-4745c03b.js";import"./p-83f217d4.js";let y=class{constructor(i){e(this,i),this.activityContextMenuState={shown:!1,x:0,y:0,activity:null},this.layoutDirection=h.TopBottom,this.getActivityBorderColor=t=>{var e,i;const s=this.workflowInstance,a=s?s.faults:null,n=(s.activityData[t.activityId]||{})._Lifecycle||{},o=null!==(e=n.executing)&&void 0!==e?e:n.Executing,l=null!==(i=n.executed)&&void 0!==i?i:n.Executed;return a&&a.find((e=>e.faultedActivityId==t.activityId))?"red":l?"green":o?"blue":null},this.renderActivityStatsButton=t=>{var e,i;const s=this.workflowInstance,a=s?s.faults:null,n=(s.activityData[t.activityId]||{})._Lifecycle||{},o=null!==(e=n.executing)&&void 0!==e?e:n.Executing,l=null!==(i=n.executed)&&void 0!==i?i:n.Executed;let r;return r=a&&a.find((e=>e.faultedActivityId==t.activityId))?'<svg class="elsa-flex-shrink-0 elsa-h-6 elsa-w-6 elsa-text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n                <circle cx="12" cy="12" r="10"/>\n                <line x1="12" y1="8" x2="12" y2="12"/>\n                <line x1="12" y1="16" x2="12.01" y2="16"/>\n              </svg>':l?'<svg class="elsa-h-6 elsa-w-6 elsa-text-green-500"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n                <circle cx="12" cy="12" r="10" />\n                <line x1="12" y1="16" x2="12" y2="12" />\n                <line x1="12" y1="8" x2="12.01" y2="8" />\n              </svg>':o?'<svg class="elsa-h-6 elsa-w-6 elsa-text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n                <circle cx="12" cy="12" r="10" />\n                <line x1="12" y1="16" x2="12" y2="12" />\n                <line x1="12" y1="8" x2="12.01" y2="8" />\n              </svg>':'<svg class="h-6 w-6 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n                <circle cx="12" cy="12" r="10" />\n                <line x1="12" y1="16" x2="12" y2="12" />\n                <line x1="12" y1="8" x2="12.01" y2="8" />\n              </svg>',`<div class="context-menu-wrapper elsa-flex-shrink-0">\n            <button aria-haspopup="true"\n                    class="elsa-w-8 elsa-h-8 elsa-inline-flex elsa-items-center elsa-justify-center elsa-text-gray-400 elsa-rounded-full elsa-bg-transparent hover:elsa-text-gray-500 focus:elsa-outline-none focus:elsa-text-gray-500 focus:elsa-bg-gray-100 elsa-transition elsa-ease-in-out elsa-duration-150">\n              ${r}\n            </button>\n          </div>`},this.renderActivityPerformanceMenu=()=>{const e=this.activityStats;return t("div",{"data-transition-enter":"elsa-transition elsa-ease-out elsa-duration-100","data-transition-enter-start":"elsa-transform elsa-opacity-0 elsa-scale-95","data-transition-enter-end":"elsa-transform elsa-opacity-100 elsa-scale-100","data-transition-leave":"elsa-transition elsa-ease-in elsa-duration-75","data-transition-leave-start":"elsa-transform elsa-opacity-100 elsa-scale-100","data-transition-leave-end":"elsa-transform elsa-opacity-0 elsa-scale-95",class:(this.activityContextMenuState.shown?"":"hidden")+" elsa-absolute elsa-z-10 elsa-mt-3 elsa-px-2 elsa-w-screen elsa-max-w-xl sm:elsa-px-0",style:{left:`${this.activityContextMenuState.x+64}px`,top:this.activityContextMenuState.y-256+"px"},ref:t=>this.contextMenu=t},t("div",{class:"elsa-rounded-lg elsa-shadow-lg elsa-ring-1 elsa-ring-black elsa-ring-opacity-5 elsa-overflow-hidden"},e?t("div",null,t("div",null,t("table",{class:"elsa-min-w-full elsa-divide-y elsa-divide-gray-200 elsa-border-b elsa-border-gray-200"},t("thead",{class:"elsa-bg-gray-50"},t("tr",null,t("th",{scope:"col",class:"elsa-px-6 elsa-py-3 elsa-text-left elsa-text-xs elsa-font-medium elsa-text-gray-500 elsa-text-right elsa-tracking-wider"},"Event"),t("th",{scope:"col",class:"elsa-px-6 elsa-py-3 elsa-text-left elsa-text-xs elsa-font-medium elsa-text-gray-500 elsa-text-right elsa-tracking-wider"},"Count"))),t("tbody",{class:"elsa-bg-white elsa-divide-y elsa-divide-gray-200"},e.eventCounts.length>0?e.eventCounts.map((e=>t("tr",null,t("td",{class:"elsa-px-6 elsa-py-4 elsa-whitespace-nowrap elsa-text-sm elsa-font-medium elsa-text-gray-900"},e.eventName),t("td",{class:"elsa-px-6 elsa-py-4 elsa-whitespace-nowrap elsa-text-sm elsa-text-gray-500"},e.count)))):t("tr",null,t("td",{colSpan:2,class:"elsa-px-6 elsa-py-4 elsa-whitespace-nowrap elsa-text-sm elsa-font-medium elsa-text-gray-900"},"No events record for this activity."))))),e.eventCounts.length>0?t("div",{class:"elsa-relative elsa-grid elsa-gap-6 elsa-bg-white px-5 elsa-py-6 sm:elsa-gap-8 sm:elsa-p-8"},(()=>{if(e.fault)return t("elsa-workflow-fault-information",{workflowFault:this.workflowInstance.faults.find((t=>t.faultedActivityId==this.selectedActivityId)),faultedAt:this.workflowInstance.faultedAt})})(),(()=>{if(!e.fault)return t("elsa-workflow-performance-information",{activityStats:e})})()):void 0):t("div",{class:"elsa-p-6 elsa-bg-white"},"Loading...")))}}async getServerUrl(){return this.serverUrl}async workflowInstanceIdChangedHandler(t){const e=t;let i={id:null,definitionId:null,definitionVersionId:null,version:null,workflowStatus:l.Idle,variables:{data:{}},blockingActivities:[],scheduledActivities:[],scopes:[],currentActivity:{activityId:""}},s={id:null,version:1,activities:[],connections:[],persistenceBehavior:n.WorkflowBurst,customAttributes:{data:{}},persistWorkflow:!1,isLatest:!1,isPublished:!1,loadWorkflowContext:!1,isSingleton:!1,saveWorkflowContext:!1,variables:{data:{}},type:null,inputProperties:{data:{}},outputProperties:{data:{}},propertyStorageProviders:{}};const a=await c(this.serverUrl);if(e&&e.length>0)try{i=await a.workflowInstancesApi.get(e),s=await a.workflowRegistryApi.get(i.definitionId,{version:i.version})}catch(t){console.warn("The specified workflow definition does not exist. Creating a new one.")}this.updateModels(i,s)}async serverUrlChangedHandler(t){t&&t.length>0&&await this.loadActivityDescriptors()}onWindowClicked(t){this.contextMenu.contains(t.target)||this.handleContextMenuChange(0,0,!1,null)}async componentWillLoad(){const t=v.getFeatureConfig(v.supportedFeatures.workflowLayout);t&&t.enabled&&(this.layoutDirection=t.value),await this.serverUrlChangedHandler(this.serverUrl),await this.workflowInstanceIdChangedHandler(this.workflowInstanceId)}componentDidLoad(){this.designer||(this.designer=this.el.querySelector(d.useX6Graphs?"x6-designer":"elsa-designer-tree"),this.designer.model=this.workflowModel)}componentDidRender(){var t;if(this.el&&this.contextMenu){let e=this.activityContextMenuState.x+64,i=this.activityContextMenuState.y-256;const s=null===(t=this.el)||void 0===t?void 0:t.getBoundingClientRect(),a=this.contextMenu.getBoundingClientRect(),n=null==a?void 0:a.width,o=null==a?void 0:a.height;e=Math.min(s.width,e+n+32)-n-32,i=Math.min(s.height,i+o)-o-32,i=Math.max(0,i),this.contextMenu.style.left=`${e}px`,this.contextMenu.style.top=`${i}px`}}async loadActivityDescriptors(){const t=await c(this.serverUrl);d.activityDescriptors=await t.activitiesApi.list()}updateModels(t,e){this.workflowInstance=t,this.workflowBlueprint=e,this.workflowModel=this.mapWorkflowModel(e,t)}mapWorkflowModel(t,e){const i=t.activities.filter((e=>e.parentId==t.id||!e.parentId)).map((t=>this.mapActivityModel(t,e))),s=t.connections.filter((t=>i.findIndex((e=>e.activityId==t.sourceActivityId||e.activityId==t.targetActivityId))>-1)).map(this.mapConnectionModel);return{activities:i,connections:s,persistenceBehavior:t.persistenceBehavior}}mapActivityModel(t,e){const i=d.activityDescriptors.find((e=>e.type==t.type)),s=e.activityData[t.id]||{},n=a.map(t.inputProperties.data,((t,e)=>{const a=i.inputProperties.find((t=>t.name==e))||i.outputProperties.find((t=>t.name==e)),n=(null==a?void 0:a.defaultSyntax)||o.Literal,l={},r=s[e]||t;return l[n]=r,{name:e,value:r,expressions:l,syntax:n}}));return{activityId:t.id,description:t.description,displayName:t.displayName||t.name||t.type,name:t.name,type:t.type,properties:n,outcomes:[...i.outcomes],persistWorkflow:t.persistWorkflow,saveWorkflowContext:t.saveWorkflowContext,loadWorkflowContext:t.loadWorkflowContext,propertyStorageProviders:t.propertyStorageProviders,x:t.x,y:t.y}}mapConnectionModel(t){return{sourceId:t.sourceActivityId,targetId:t.targetActivityId,outcome:t.outcome}}handleContextMenuChange(t,e,i,s){this.activityContextMenuState={shown:i,x:t,y:e,activity:s}}onShowWorkflowSettingsClick(){i.emit(r.ShowWorkflowSettings)}onRecordSelected(t){const e=t.detail,i=e?this.workflowBlueprint.activities.find((t=>t.id===e.activityId)):null;this.selectedActivityId=null!=i?null!=i.parentId?i.parentId:i.id:null}async onActivitySelected(t){this.selectedActivityId=t.detail.activityId,await this.journal.selectActivityRecord(this.selectedActivityId)}async onActivityDeselected(t){this.selectedActivityId==t.detail.activityId&&(this.selectedActivityId=null),await this.journal.selectActivityRecord(this.selectedActivityId)}async onActivityContextMenuButtonClicked(t){if(this.activityContextMenuState=t.detail,this.activityStats=null,!t.detail.shown)return;const e=await c(this.serverUrl);this.activityStats=await e.activityStatsApi.get(this.workflowInstanceId,t.detail.activity.activityId)}render(){const e=d.activityDescriptors;return t(s,{class:"elsa-flex elsa-flex-col elsa-w-full elsa-relative",ref:t=>this.el=t},this.renderCanvas(),t("elsa-workflow-instance-journal",{ref:t=>this.journal=t,workflowInstanceId:this.workflowInstanceId,workflowInstance:this.workflowInstance,serverUrl:this.serverUrl,activityDescriptors:e,workflowBlueprint:this.workflowBlueprint,workflowModel:this.workflowModel,onRecordSelected:t=>this.onRecordSelected(t)}))}renderCanvas(){return t("div",{class:"elsa-flex-1 elsa-flex"},!d.useX6Graphs&&t("elsa-designer-tree",{model:this.workflowModel,class:"elsa-flex-1",ref:t=>this.designer=t,layoutDirection:this.layoutDirection,mode:u.Instance,activityContextMenuButton:this.renderActivityStatsButton,activityBorderColor:this.getActivityBorderColor,activityContextMenu:this.activityContextMenuState,selectedActivityIds:[this.selectedActivityId],onActivitySelected:t=>this.onActivitySelected(t),onActivityDeselected:t=>this.onActivityDeselected(t),onActivityContextMenuButtonClicked:t=>this.onActivityContextMenuButtonClicked(t)}),d.useX6Graphs&&t("x6-designer",{model:this.workflowModel,class:"elsa-workflow-wrapper",ref:t=>this.designer=t,layoutDirection:this.layoutDirection,mode:u.Instance,activityContextMenuButton:this.renderActivityStatsButton,activityBorderColor:this.getActivityBorderColor,activityContextMenu:this.activityContextMenuState,selectedActivityIds:[this.selectedActivityId],onActivitySelected:t=>this.onActivitySelected(t),onActivityDeselected:t=>this.onActivityDeselected(t),onActivityContextMenuButtonClicked:t=>this.onActivityContextMenuButtonClicked(t)}),this.renderActivityPerformanceMenu())}static get watchers(){return{workflowInstanceId:["workflowInstanceIdChangedHandler"],serverUrl:["serverUrlChangedHandler"]}}};p.injectProps(y,["serverUrl","culture"]);export{y as elsa_workflow_instance_viewer_screen};