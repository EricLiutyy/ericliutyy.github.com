/**
 * Created with JetBrains WebStorm.
 * User: lenovo
 * Date: 13-9-10
 * Time: 下午10:21
 * To change this template use File | Settings | File Templates.
 */
//常用工具函数

//通过classname获取元素
function getByClass(oParent, sClass)
{
    var aEle=oParent.getElementsByTagName('*');
    var re=new RegExp('\\b'+sClass+'\\b');
    var arr=[];

    for(var i=0;i<aEle.length;i++)
    {
        if(re.test(aEle[i].className))
        {
            arr.push(aEle[i]);
        }
    }
    return arr;
}