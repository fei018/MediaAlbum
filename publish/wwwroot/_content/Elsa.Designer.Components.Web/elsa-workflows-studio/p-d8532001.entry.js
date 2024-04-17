import{r as e,c as s,h as l,H as a}from"./p-ee0b9025.js";import{c as t}from"./p-a3b5bd35.js";import{h as n}from"./p-f931e145.js";import{b as i}from"./p-c74b54ba.js";import{a as r}from"./p-7462b7bd.js";import{a as o}from"./p-a3e4386d.js";import{e as d,d as c}from"./p-971980b1.js";import"./p-80de33dc.js";import"./p-4745c03b.js";import"./p-93cac3a6.js";import"./p-d88cb309.js";let u=class{constructor(a){e(this,a),this.recordSelected=s(this,"recordSelected",7),this.activityDescriptors=[],this.isVisible=!0,this.records={items:[],totalCount:0},this.filteredRecords=[],this.selectedTabId="journal",this.renderJournalTab=()=>{const e=this.filteredRecords,s=this.records.items,a=this.activityDescriptors,i=this.workflowBlueprint.activities||[],o=this.selectedRecordId;return l("div",{class:"flow-root elsa-mt-4"},l("ul",{class:"-elsa-mb-8"},e.map(((u,m)=>{var f=s.slice(0,s.indexOf(e[m])).reverse().findIndex((e=>e.activityId==u.activityId));const p=s[s.indexOf(e[m])-(f+1)],y=n(u.timestamp),x=n(p.timestamp),b=n.duration(y.diff(x)),g=u.activityType,v=r.getIcon(g),h=a.find((e=>e.type===g))||{displayName:null,type:null},w=i.find((e=>e.id===u.activityId))||{name:null,displayName:null},I=w.displayName||w.name||h.displayName||h.type||"(Not Found): "+g,k=u.eventName,j=this.getEventColor(k),S=u.id===o?"elsa-border-blue-600":"hover:elsa-bg-gray-100 elsa-border-transparent",T=u.data||{},A={},C={State:!0,Input:null,Outcomes:!0,Exception:!0};for(const e in T){if(!T.hasOwnProperty(e))continue;if(C[e])continue;const l=T[e];if(!l&&0!=l)continue;let s=null;s="string"==typeof l?l:"object"==typeof l?JSON.stringify(l,null,1):void 0===l?null:l.toString(),A[e]=s}const N=d(b),E=T.Outcomes&&T.Outcomes||[],O=T.Exception?T.Exception:null,R=e=>l("div",null,l("div",{class:"elsa-mb-4"},l("strong",{class:"elsa-block elsa-font-bold"},e.Type),e.Message),e.InnerException?l("div",{class:"elsa-ml-4"},R(e.InnerException)):void 0);return l("li",null,l("div",{onClick:()=>this.onRecordClick(u),class:`${S} elsa-border-2 elsa-cursor-pointer elsa-p-4 elsa-rounded`},l("div",{class:"elsa-relative elsa-pb-10"},l("div",{class:"elsa-flex elsa-absolute top-8 elsa-left-4 -elsa-ml-px elsa-h-full elsa-w-0.5"},l("div",{class:"elsa-flex elsa-flex-1 elsa-items-center elsa-relative elsa-right-10"},l("span",{class:"elsa-flex-1 elsa-text-sm elsa-text-gray-500 elsa-w-max elsa-bg-white elsa-p-1 elsa-ml-1 elsa-rounded-r"},N))),l("div",{class:"elsa-relative elsa-flex elsa-space-x-3"},l("div",null,l("span",{class:`elsa-h-8 elsa-w-8 elsa-rounded-full ${j} elsa-flex elsa-items-center elsa-justify-center elsa-ring-8 elsa-ring-white elsa-mr-1`,innerHTML:v})),l("div",{class:"elsa-min-w-0 elsa-flex-1 elsa-pt-1.5 elsa-flex elsa-justify-between elsa-space-x-4"},l("div",null,l("h3",{class:"elsa-text-lg elsa-leading-6 elsa-font-medium elsa-text-gray-900"},I)),l("div",null,l("span",{class:"elsa-relative elsa-inline-flex elsa-items-center elsa-rounded-full elsa-border elsa-border-gray-300 elsa-px-3 elsa-py-0.5 elsa-text-sm"},l("span",{class:"elsa-absolute elsa-flex-shrink-0 elsa-flex elsa-items-center elsa-justify-center"},l("span",{class:`elsa-h-1.5 elsa-w-1.5 elsa-rounded-full ${j}`,"aria-hidden":"true"})),l("span",{class:"elsa-ml-3.5 elsa-font-medium elsa-text-gray-900"},k))),l("div",{class:"elsa-text-right elsa-text-sm elsa-whitespace-nowrap elsa-text-gray-500"},l("span",null,y.format("DD-MM-YYYY HH:mm:ss"))))),l("div",{class:"elsa-ml-12 elsa-mt-2"},l("dl",{class:"sm:elsa-divide-y sm:elsa-divide-gray-200"},l("div",{class:"elsa-grid elsa-grid-cols-2 elsa-gap-x-4 elsa-gap-y-8 sm:elsa-grid-cols-2"},l("div",{class:"sm:elsa-col-span-2"},l("dt",{class:"elsa-text-sm elsa-font-medium elsa-text-gray-500"},l("span",null,"Activity ID"),l("elsa-copy-button",{value:u.activityId})),l("dd",{class:"elsa-mt-1 elsa-text-sm elsa-text-gray-900 elsa-mb-2"},u.activityId)),E.length>0?l("div",{class:"sm:elsa-col-span-2"},l("dt",{class:"elsa-text-sm elsa-font-medium elsa-text-gray-500"},l("span",null,"Outcomes"),l("elsa-copy-button",{value:E.join(", ")})),l("dd",{class:"elsa-mt-1 elsa-text-sm elsa-text-gray-900 elsa-mb-2"},l("div",{class:"elsa-flex elsa-flex-col elsa-space-y-4 sm:elsa-space-y-0 sm:elsa-flex-row sm:elsa-space-x-4"},E.map((e=>l("span",{class:"elsa-inline-flex elsa-items-center elsa-px-3 elsa-py-0.5 elsa-rounded-full elsa-text-sm elsa-font-medium elsa-bg-blue-100 elsa-text-blue-800"},e)))))):void 0,u.message&&!O?l("div",{class:"sm:elsa-col-span-2"},l("dt",{class:"elsa-text-sm elsa-font-medium elsa-text-gray-500"},l("span",null,"Message"),l("elsa-copy-button",{value:u.message})),l("dd",{class:"elsa-mt-1 elsa-text-sm elsa-text-gray-900"},u.message)):void 0,O?[l("div",{class:"sm:elsa-col-span-2"},l("dt",{class:"elsa-text-sm elsa-font-medium elsa-text-gray-500"},l("span",null,"Exception"),l("elsa-copy-button",{value:O.Type+"\n"+O.Message})),l("dd",{class:"elsa-mt-1 elsa-text-sm elsa-text-gray-900"},R(O))),l("div",{class:"sm:elsa-col-span-2"},l("dt",{class:"elsa-text-sm elsa-font-medium elsa-text-gray-500"},l("span",null,"Exception Details"),l("elsa-copy-button",{value:JSON.stringify(O,null,1)})),l("dd",{class:"elsa-mt-1 elsa-text-sm elsa-text-gray-900 elsa-overflow-x-auto"},l("pre",{onClick:e=>c(e.currentTarget)},JSON.stringify(O,null,1))))]:void 0,t.map(A,((e,s)=>l("div",{class:"sm:elsa-col-span-2"},l("dt",{class:"elsa-text-sm elsa-font-medium elsa-text-gray-500 elsa-capitalize"},l("span",null,s),l("elsa-copy-button",{value:e})),l("dd",{class:"elsa-mt-1 elsa-text-sm elsa-text-gray-900 elsa-mb-2 elsa-overflow-x-auto"},l("pre",{onClick:e=>c(e.currentTarget)},e)))))))))))}))))},this.renderActivityStateTab=()=>{const e=this.workflowModel&&this.selectedActivityId?this.workflowModel.activities.find((e=>e.activityId===this.selectedActivityId)):null;if(!e)return l("p",{class:"elsa-mt-4"},"No activity selected");const s=Object.assign(Object.assign({},e),{properties:e.properties.map((e=>({name:e.name,value:e.value})))});return l("div",{class:"elsa-mt-4"},l("pre",null,JSON.stringify(s,null,2)))},this.renderGeneralTab=()=>{const{workflowInstance:e,workflowBlueprint:s}=this,{finishedAt:a,lastExecutedAt:t,faultedAt:i}=e,r="DD-MM-YYYY HH:mm:ss",d=this.getStatusColor(e.workflowStatus);return l("dl",{class:"elsa-border-b elsa-border-gray-200 elsa-divide-y elsa-divide-gray-200"},l("div",{class:"elsa-py-3 elsa-flex elsa-justify-between elsa-text-sm elsa-font-medium"},l("dt",{class:"elsa-text-gray-500"},"Workflow Name"),l("dd",{class:"elsa-text-gray-900"},s.name)),l("div",{class:"elsa-py-3 elsa-flex elsa-justify-between elsa-text-sm elsa-font-medium"},l("dt",{class:"elsa-text-gray-500"},"Instance Name"),l("dd",{class:"elsa-text-gray-900"},e.name||"-")),l("div",{class:"elsa-py-3 elsa-flex elsa-justify-between elsa-text-sm elsa-font-medium"},l("dt",{class:"elsa-text-gray-500"},"Id"),l("dd",{class:"elsa-text-gray-900"},e.id)),l("div",{class:"elsa-py-3 elsa-flex elsa-justify-between elsa-text-sm elsa-font-medium"},l("dt",{class:"elsa-text-gray-500"},"Correlation id"),l("dd",{class:"elsa-text-gray-900"},e.correlationId)),l("div",{class:"elsa-py-3 elsa-flex elsa-justify-between elsa-text-sm elsa-font-medium"},l("dt",{class:"elsa-text-gray-500"},"Version"),l("dd",{class:"elsa-text-gray-900 elsa-break-all"},e.version||"-")),l("div",{class:"elsa-py-3 elsa-flex elsa-justify-between elsa-text-sm elsa-font-medium"},l("dt",{class:"elsa-text-gray-500"},"Workflow Status"),l("dd",{class:"elsa-text-gray-900 elsa-break-all"},l("span",{class:"elsa-relative elsa-inline-flex elsa-items-center elsa-rounded-full"},l("span",{class:"elsa-flex-shrink-0 elsa-flex elsa-items-center elsa-justify-center"},l("span",{class:`elsa-w-2-5 elsa-h-2-5 elsa-rounded-full ${d}`,"aria-hidden":"true"})),l("span",{class:"elsa-ml-3.5"},e.workflowStatus||"-")))),l("div",{class:"elsa-py-3 elsa-flex elsa-justify-between elsa-text-sm elsa-font-medium"},l("dt",{class:"elsa-text-gray-500"},"Created"),l("dd",{class:"elsa-text-gray-900 elsa-break-all"},n(e.createdAt).format(r)||"-")),l("div",{class:"elsa-py-3 elsa-flex elsa-justify-between elsa-text-sm elsa-font-medium"},l("dt",{class:"elsa-text-gray-500"},"Finished"),l("dd",{class:"elsa-text-gray-900 elsa-break-all"},a?n(a).format(r):"-")),l("div",{class:"elsa-py-3 elsa-flex elsa-justify-between elsa-text-sm elsa-font-medium"},l("dt",{class:"elsa-text-gray-500"},"Last Executed"),l("dd",{class:"elsa-text-gray-900 elsa-break-all"},t?n(t).format(r):"-")),l("div",{class:"elsa-py-3 elsa-flex elsa-justify-between elsa-text-sm elsa-font-medium"},l("dt",{class:"elsa-text-gray-500"},"Faulted"),l("dd",{class:"elsa-text-gray-900 elsa-break-all"},i?n(i).format(r):"-")))},this.renderVariablesTab=()=>{const{workflowInstance:e}=this,{variables:s}=e;return l("dl",{class:"elsa-border-b elsa-border-gray-200 elsa-divide-y elsa-divide-gray-200"},l("div",{class:"elsa-py-3 elsa-text-sm elsa-font-medium"},(null==s?void 0:s.data)?l("pre",null,JSON.stringify(null==s?void 0:s.data,null,2)):"-"))}}async selectActivityRecord(e){const l=e?this.filteredRecords.find((l=>l.activityId==e)):null;this.selectActivityRecordInternal(l),await this.flyoutPanel.selectTab("journal",!0)}async workflowInstanceIdChangedHandler(e){const l=e,s=await o(this.serverUrl);if(l&&l.length>0)try{this.records=await s.workflowExecutionLogApi.get(l),this.filteredRecords=this.records.items.filter((e=>"Executing"!=e.eventName&&"Resuming"!=e.eventName))}catch(e){console.warn("The specified workflow instance does not exist.")}}async componentWillLoad(){await this.workflowInstanceIdChangedHandler(this.workflowInstanceId)}selectActivityRecordInternal(e){const l=e?this.workflowBlueprint.activities.find((l=>l.id===e.activityId)):null;this.selectedRecordId=e?e.id:null,this.selectedActivityId=null!=l?l.parentId&&l.parentId!=this.workflowBlueprint.id?l.parentId:l.id:null}getEventColor(e){return{Executing:"elsa-bg-blue-500",Executed:"elsa-bg-green-500",Faulted:"elsa-bg-rose-500",Warning:"elsa-bg-yellow-500",Information:"elsa-bg-blue-500"}[e]||"elsa-bg-gray-500"}getStatusColor(e){switch(e){default:case i.Idle:return"gray";case i.Running:return"rose";case i.Suspended:return"blue";case i.Finished:return"green";case i.Faulted:return"red";case i.Cancelled:return"yellow"}}onRecordClick(e){this.selectActivityRecordInternal(e),this.recordSelected.emit(e)}render(){return l(a,null,this.renderPanel(),l("elsa-workflow-definition-editor-notifications",null))}renderPanel(){return l("elsa-flyout-panel",{ref:e=>this.flyoutPanel=e},l("elsa-tab-header",{tab:"general",slot:"header"},"General"),l("elsa-tab-content",{tab:"general",slot:"content"},this.renderGeneralTab()),l("elsa-tab-header",{tab:"journal",slot:"header"},"Journal"),l("elsa-tab-content",{tab:"journal",slot:"content"},this.renderJournalTab()),l("elsa-tab-header",{tab:"activityState",slot:"header"},"Activity State"),l("elsa-tab-content",{tab:"activityState",slot:"content"},this.renderActivityStateTab()),l("elsa-tab-header",{tab:"variables",slot:"header"},"Variables"),l("elsa-tab-content",{tab:"variables",slot:"content"},this.renderVariablesTab()))}static get watchers(){return{workflowInstanceId:["workflowInstanceIdChangedHandler"]}}};export{u as elsa_workflow_instance_journal};