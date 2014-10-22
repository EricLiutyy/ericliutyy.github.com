/**
 * Created with JetBrains WebStorm.
 * User: lenovo
 * Date: 13-9-10
 * Time: 下午10:21
 * To change this template use File | Settings | File Templates.
 */
//常用界面效果类
//使两容器高度一致
function setSameHight(obj1,obj2,diff){
	if(diff){
		if(obj1.offsetHeight + diff <= obj2.offsetHeight){
			return;	
		}
		obj2.style.height = obj1.offsetHeight - diff + 'px';
	}
	else{
		obj2.style.height = obj1.offsetHeight + 'px';
	}
}
//隔行变色
function setOddColor(nodes,color){
	for (var i=0 ; i<nodes.length ; i++){
		if (i%2){
			nodes[i].style.backgroundColor = color;
		}
	}
}
// 全选checkbox
function checkAllCheckbox(input,parent){
		if(input){
			var arr =[]
			
			var oCheckboxs = parent.getElementsByTagName('input');
			//筛选checkbox
			for (var i=0 ; i<oCheckboxs.length; i++){
		
				if (oCheckboxs[i].type == 'checkbox')
				
				arr.push(oCheckboxs[i]);
				
			}
			//绑定事件
			input.onclick = function (){
				
				if (this.checked == false) {
					
					for ( var i=0 ; i< arr.length ; i++){
						
						arr[i].checked	= false;
					}	
				}
				else {
					
					for ( var i=0 ; i< arr.length ; i++){
						
						arr[i].checked	= true;
					}	
				}
			}
		}
}
// 单选checkbox
function singleCheckbox(parent){
	//存储checkbox
	if (parent){
		var arr = [];
		var oCheckboxs = parent.getElementsByTagName('input');
		//筛选checkbox
		for (var i=0 ; i<oCheckboxs.length; i++){
			
			if (oCheckboxs[i].type == 'checkbox')
			
			arr.push(oCheckboxs[i]);	
			
		}
		//循环checkbox添加事件
		for (var i=0; i<arr.length ; i++){
			
			arr[i].onclick = function (){
				
				if (this.checked == false){
					
					return;
				}
				for(var j=0; j<arr.length; j++){
					
					arr[j].checked = false;	
				}
				this.checked = true;
			}	
		}
	}
	else return ;
	
}
