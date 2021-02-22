

value2="";
function FuelTypeCheck()
{
    if (document.getElementById('petrolCheck').checked) {
        value2 = document.getElementById("petrolCheck").value;
        document.getElementById('ifpetrol').style.display = 'block';
    }
    else document.getElementById('ifpetrol').style.display = 'none';

    if (document.getElementById('dieselCheck').checked) {
     value2 = document.getElementById("dieselCheck").value;
        document.getElementById('ifdiesel').style.display = 'block';
    }
    else document.getElementById('ifdiesel').style.display = 'none';
}
value3="";
function PetrolTypeCheck()
{
    if (document.getElementById('manualCheck').checked) {
        value3 = document.getElementById("manualCheck").value;
        document.getElementById('ifmanual').style.display = 'block';
    }
    else document.getElementById('ifmanual').style.display = 'none';

    if (document.getElementById('automaticCheck').checked) {
        value3=document.getElementById("automaticCheck").value;
        document.getElementById('ifautomatic').style.display = 'block';
    }
    else document.getElementById('ifautomatic').style.display = 'none';

    if(document.getElementById("semiautomaticCheck").checked) 
    {    value3=document.getElementById('semiautomaticCheck').value;
        document.getElementById('ifautomatic').style.display = 'none';
    }
}
valued3="",value4="";
function DieselTypeCheck()
{
   
    if (document.getElementById('manualdCheck').checked) {
        valued3=document.getElementById("manualdCheck").value
        document.getElementById('ifdmanual').style.display = 'block';
    }
    else document.getElementById('ifdmanual').style.display = 'none';

    if (document.getElementById('automaticdCheck').checked) {
        valued3=document.getElementById("automaticdCheck").value
        document.getElementById('ifdautomatic').style.display = 'block';
    }
    else document.getElementById('ifdautomatic').style.display = 'none';
    if(document.getElementById("semiautomaticdCheck").checked) 
    {    valued3=document.getElementById('semiautomaticdCheck').value;
        document.getElementById('ifdautomatic').style.display = 'none';
    }
}

function ManualTypeCheck()
{
    
    if (document.getElementById('fourCheck').checked) {
        value4 = document.getElementById("fourCheck").value;
    }

    if (document.getElementById('fiveCheck').checked) {
        value4=document.getElementById("fiveCheck").value;
}
}
value5="",valued4="",valued5="";
function AutomaticTypeCheck()
{
   
   if (document.getElementById('cmtCheck').checked) {
    value5 = document.getElementById("cmtCheck").value;
}

if (document.getElementById('dctCheck').checked) {
    value5=document.getElementById("dctCheck").value;
}
if (document.getElementById('amtCheck').checked) {
    value5=document.getElementById("amtCheck").value;
}
}
function ManualdTypeCheck()
{
    
    if (document.getElementById('fourdCheck').checked) {
        valued4 = document.getElementById("fourdCheck").value;
    }

    if (document.getElementById('fivedCheck').checked) {
        valued4=document.getElementById("fivedCheck").value;
}
}
function AutomaticdTypeCheck()
{
   
   if (document.getElementById('cmtdCheck').checked) {
    valued5 = document.getElementById("cmtdCheck").value;
}

if (document.getElementById('dctdCheck').checked) {
    valued5=document.getElementById("dctdCheck").value;
}
if (document.getElementById('amtdCheck').checked) {
    valued5=document.getElementById("amtdCheck").value;
}
}

function Car(cname,year){
    this.cname=cname;
    this.year=year;
}
function Update(cname,year)
{
    Car(this,cname,year);
    this.cname=cname;
    this.year=year;
}
Car.prototype.type="";
Car.prototype.gear="0";
Car.prototype.modegearauto="0";
Car.prototype.modegearman="0";
Car.prototype.message=function()
{
    if(this.cname==""|| this.year==""||this.type==""||this.mode==""||(this.modegearauto==""&& this.modegearman==""))
    alert("please enter all the fields");
    else if(this.modegearauto=="0"|| this.modegearman=="0")
    alert(this.cname+" "+this.year+" "+this.type+" "+this.mode);
    else if(this.modegearman=="")
    alert(this.cname+" "+this.year+" "+this.type+" "+this.mode+" "+this.modegearauto);
    else
    alert(this.cname+" "+this.year+" "+this.type+" "+this.mode+" "+this.modegearman);
}
Update.prototype=new Car();
Update.prototype.choose=function()
{
    this.type=value2;
    this.mode=(value3==""?valued3:value3);
    this.modegearman=(value4==""?valued4:value4);
    this.modegearauto=(value5==""?valued5:value5);
    console.log(this.type+this.mode+this.modegearauto+this.modegearman+"");
}
    function Myfunction() {
    cname = document.getElementById("carname").value;
    year = document.getElementById("year").value;
    var y = new Update(cname,year);
    new Car(cname,year);
    y.choose();
    y.message();
}