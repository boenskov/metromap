/* 	Stations - список станций
		название станции
		x координата маркера
		y координата маркера
		положение маркера (0=left, 1=right)
		h ширина поля маркера (если требуется корректировка)

groups - массив групп. элементы:
	x
	y
	все остальные - id станций
*/
var metromap_stations=[
[94,"Авиамоторная",506,290,0,73],
[130,"Автозаводская",387,472,0,78],
[182,"Академическая",185,552,1,78],
[325,"Александровский сад",217,390,1,108],
[65,"Алексеевская",387,92,0,73],
[138,"Алма-Атинская",384,665,1,78],
[50,"Алтуфьево",298,41,0,58],
[159,"Аннино",284,645,1,43],
[322,"Арбатская(c)",223,400,1,73],
[323,"Арбатская(г)",204,375,0,73],
[44,"Аэропорт",181,71,1,53],
[61,"Бабушкинская",387,52,0,73],
[22,"Багратионовская",48,278,0,88],
[300,"Баррикадная",173,241,1,80],
[86,"Бауманская",506,210,0,63],
[37,"Беговая",163,192,1,48],
[302,"Белорусская",219,220,1,68],
[186,"Беляево",185,592,1,48],
[51,"Бибирево",298,51,0,53],
[327,"Библиотека им.Ленина",232,390,0,113],
[170,"Битцевский парк",185,646,1,88],
[119,"Борисово",404,620,0,53],
[337,"Боровицкая",237,400,0,63],
[63,"Ботанический сад",387,72,0,93],
[117,"Братиславская",404,600,0,78],
[174,"Бульвар Адм.Ушакова",285,723,1,108],
[160,"Бульвар Дм.Донского",287,684,0,100,2],
[176,"Бунинская аллея",285,743,1,88],
[64,"ВДНХ",387,82,0,33],
[140,"Варшавская",360,518,1,63],
[53,"Владыкино",298,71,0,58],
[41,"Водный стадион",181,41,1,83],
[42,"Войковская",181,51,1,63],
[101,"Волгоградский пр-т",487,598,0,103],
[115,"Волжская",404,580,0,53],
[12,"Волоколамская",14,153,0,78],
[202,"Воробьевы горы",82,606,1,83],
[27,"Выставочная",124,329,0,68],
[105,"Выхино",487,638,0,43],
[28,"Деловой центр",124,329,1,78],
[45,"Динамо",181,81,1,43],
[56,"Дмитровская",259,160,1,68],
[311,"Добрынинская",287,468,0,73],
[136,"Домодедовская",384,630,1,78],
[208,"Достоевская",313,192,0,68],
[112,"Дубровка",404,550,0,53],
[121,"Зябликово",399,646,0,58],
[82,"Измайловская",506,170,0,73],
[185,"Калужская",185,582,1,58],
[133,"Кантемировская",384,600,1,83],
[141,"Каховская",298,575,0,58],
[132,"Каширская",387,494,0,58],
[315,"Киевская",152,358,1,53],
[330,"Китай-город",351,330,0,68],
[113,"Кожуховская",404,560,0,68],
[131,"Коломенская",387,482,0,68],
[305,"Комсомольская",383,240,0,78],
[187,"Коньково",185,602,1,53],
[137,"Красногвардейская",384,646,1,98],
[316,"Краснопресненская",181,249,1,98],
[74,"Красносельская",487,82,0,83],
[344,"Красные ворота",367,254,0,83],
[111,"Крестьянская застава",453,418,0,113],
[326,"Кропоткинская",205,418,0,78],
[15,"Крылатское",14,182,0,63],
[329,"Кузнецкий мост",311,293,1,83],
[103,"Кузьминки",487,618,0,58],
[17,"Кунцевская",14,243,0,63],
[306,"Курская",418,298,0,48],
[24,"Кутузовская",68,298,0,68],
[181,"Ленинский пр-т",185,542,1,83],
[106,"Лермонтовский пр-т",487,648,0,103],
[171,"Лесопарковая",223,664,1,73],
[346,"Лубянка",319,301,1,48],
[116,"Люблино",404,590,0,48],
[308,"Марксистская",415,378,0,73],
[207,"Марьина роща",313,170,0,73],
[118,"Марьино",404,610,0,48],
[331,"Маяковская",226,246,0,63],
[60,"Медведково",387,42,0,63],
[26,"Международная",124,319,0,78],
[301,"Менделеевская",259,193,1,78],
[11,"Митино",14,143,0,43],
[16,"Молодежная",14,192,0,63],
[13,"Мякинино",14,162,0,53],
[151,"Нагатинская",284,540,1,68],
[152,"Нагорная",284,550,1,53],
[153,"Нахимовский пр-т",284,560,1,93],
[91,"Новогиреево",506,260,0,68],
[90,"Новокосино",506,250,0,63],
[334,"Новокузнецкая",330,380,0,78],
[303,"Новослободская",259,205,1,83],
[190,"Новоясеневская",185,634,1,83],
[184,"Новые Черемушки",185,572,1,88],
[313,"Октябрьская",235,460,1,68],
[35,"Октябрьское поле",163,172,1,93],
[135,"Орехово",384,620,1,48],
[52,"Отрадное",298,61,0,53],
[347,"Охотный ряд",286,337,0,68],
[310,"Павелецкая",381,432,0,63],
[314,"Парк культуры",190,430,1,78],
[19,"Парк победы",100,358,1,68],
[83,"Партизанская",506,180,0,73],
[81,"Первомайская",506,160,0,73],
[92,"Перово",506,270,0,43],
[54,"Петровско-разумовская",288,100,0,70,2],
[114,"Печатники",404,570,0,58],
[20,"Пионерская",28,258,0,63],
[30,"Планерная",163,122,1,58],
[95,"Площадь Ильича",453,343,0,83],
[324,"Площадь Революции",304,355,0,98],
[36,"Полежаевская",163,182,1,73],
[338,"Полянка",286,450,0,48],
[204,"Пр-т Вернадского",82,626,1,93],
[157,"Пражская",284,625,1,53],
[72,"Преображенская пл.",487,62,0,103],
[100,"Пролетарская",453,432,0,73],
[304,"Проспект Мира",350,215,0,78],
[183,"Профсоюзная",185,562,1,68],
[328,"Пушкинская",217,284,1,63],
[10,"Пятницкое шоссе",14,133,0,88],
[40,"Речной вокзал",181,31,1,78],
[66,"Рижская",387,102,0,48],
[110,"Римская",453,355,0,48],
[104,"Рязанский проспект",487,628,0,103],
[57,"Савеловская",259,170,1,68],
[62,"Свиблово",387,62,0,53],
[154,"Севастопольская",284,575,1,88],
[84,"Семеновская",506,190,0,68],
[312,"Серпуховская",287,480,0,73],
[18,"Славянский бульвар",58,314,1,70,2],
[321,"Смоленская(г)",189,360,0,78],
[320,"Смоленская(с)",168,373,1,78],
[43,"Сокол",181,61,1,38],
[73,"Сокольники",487,72,0,63],
[33,"Спартак",163,152,1,48],
[201,"Спортивная",82,596,1,63],
[340,"Сретенский бульвар",360,279,0,103],
[14,"Строгино",14,172,0,53],
[25,"Студенческая",78,308,0,73],
[341,"Сухаревская",349,246,1,68],
[31,"Сходненская",163,132,1,68],
[309,"Таганская",411,390,0,58],
[332,"Тверская",226,274,0,53],
[333,"Театральная",295,346,0,68],
[102,"Текстильщики",487,608,0,73],
[188,"Теплый стан",185,612,1,68],
[55,"Тимирязевская",259,150,1,78],
[343,"Третьяковская",316,380,1,78],
[206,"Тропарёво",82,646,1,58],
[339,"Трубная",292,224,0,48],
[150,"Тульская",284,530,1,53],
[342,"Тургеневская",349,285,0,73],
[32,"Тушинская",163,142,1,58],
[158,"Ул.Ак.Янгеля",284,635,1,73],
[172,"Ул.Старокачаловская",284,696,1,108],
[38,"Улица 1905 года",163,202,1,88],
[175,"Улица Горчакова",285,733,1,88],
[70,"Улица Подбельского",487,42,0,103],
[173,"Улица Скобелевская",285,713,1,103],
[203,"Университет",82,616,1,68],
[21,"Филевский парк",38,268,0,83],
[23,"Фили",58,288,0,33],
[200,"Фрунзенская",82,586,1,68],
[134,"Царицино",384,610,1,53],
[335,"Цветной бульвар",280,225,1,50,2],
[71,"Черкизовская",487,52,0,73],
[155,"Чертановская",284,605,1,73],
[336,"Чеховская",232,284,0,58],
[345,"Чистые пруды",350,270,0,73],
[307,"Чкаловская",420,310,0,63],
[180,"Шаболовская",185,532,1,68],
[120,"Шипиловская",404,630,0,68],
[93,"Шоссе Энтузиастов",506,280,0,98],
[80,"Щелковская",506,150,0,63],
[34,"Щукинская",163,162,1,58],
[85,"Электрозаводская",506,200,0,93],
[205,"Юго-Западная",82,636,1,73],
[156,"Южная",284,615,1,38],
[189,"Ясенево",185,622,1,48]];

var metromap_groups=[
[10,390,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316],
[100,0,40,41,42,43,44,45,302],
[190,0,207,208],
[280,0,50,51,52,53,54,55,56,57,301],
[370,0,60,61,62,63,64,65,66,304],
[470,0,70,71,72,73,74,305],
[495,100,80,81,82,83,84,85,86,306],
[495,225,90,91,92,93,94,95,308],
[475,675,100,101,102,103,104,105,106,309],
[390,675,110,111,112,113,114,115,116,117,118,119,120,121,307],
[390,705,130,131,132,133,134,135,136,137,138,310],
[295,690,150,151,152,153,154,155,156,157,158,159,160,312],
[295,730,170,171,172,173,174,175,176],
[125,670,180,181,182,183,184,185,186,187,188,189,190,313],
[25,655,200,201,202,203,204,205,206,314],
[0,90,10,11,12,13,14,15,16,17,18,19,315],
[30,220,20,21,22,23,24,25,26,27,28,315],
[90,90,30,31,32,33,34,35,36,37,38,300]];

/** Создание карты в контейнере с указанным id
*/
function metromap(id){
	if(id!==undefined){
		this.map_id=id;
		this.init();
	}
}
metromap.prototype.map_id=false; /// ID элемента в который пометим карту
metromap.prototype.listing=false; /// ID элемента в который пометим список названий выбранных станций
metromap.prototype.map_image="./metromap.png"; // путь до файла с картинкой
metromap.prototype.name="metro"; // название элемента checkbox которое будет передаваться серверу.
metromap.prototype.init=function(){
// инициализируем структуру карты метро и расставляем маркеры
	var map=document.getElementById(this.map_id);
	var text="<img class=\"metromap_img\" src=\""+this.map_image+"\" />";
	var labels="";
	// расставим маркеры
	var cnt=metromap_stations.length;
	var x,y,w,pos,h;
	var sx=0;var sy=0; // поправка
	for(var i=0; i<cnt;i++)
	{
		st=metromap_stations[i];
        x=st[2]+sx;
		y=st[3]+sy
		h=false;
		if(st[5]!==undefined)//указана длина
		{
			w=st[5];
			if(st[6]!==undefined)//указана высота
				h=st[6]*8;
		}
		else w=100;
		if(st[4]==0) {ext="margin-left: -7px; ";cl="metromap_left";}
		else {ext="margin-left: -"+(w-7)+"px;";cl="metromap_right";}
		if(h) ext+="height: "+h+"px !important;";
		var t='<input class="metromap_marker" id="'+this.map_id+st[0]+'" name="'+this.name+'[]" value="'+st[0]+'" type="checkbox" /><label for="'+this.map_id+st[0]+'" class="'+cl+'" style="width:'+w+'px;left:'+x+'px;top:'+y+'px;'+ext+'"><div></div></label>\n';
        labels+='<label title="Удалить станцию" class="metromap_label" id="label_'+this.map_id+st[0]+'" style="display: none;" for="'+this.map_id+st[0]+'">'+st[1]+'<span>&times;</span></label>';
		text+=t;
	}

	cnt=metromap_groups.length;
	var x,y,w,pos;
	var title="Выбрать все станции кольцевой линии";
	for(i=0;i<cnt;i++)
	{
		if(i==1) title="Выбрать все станции до кольцевой линии";
        x=metromap_groups[i][0]+sx;y=metromap_groups[i][1]+sy;
        t='<div title="'+title+'" class="metromap_group"  data-mapid="'+this.map_id+'" data-group_id="'+i+'" style="left: '+x+'px;top: '+y+'px;"></div>';
		text+=t;
	}

	map.innerHTML=text;
	if(this.listing) document.getElementById(this.listing).innerHTML=labels;

	// назначение обработчиков маркерам
	var list=map.getElementsByClassName('metromap_marker');
	cnt=list.length;
	for (i=0;i<cnt;i++){
		list[i].onchange=function(){
			var id=this.id;
			var val=this.value;
			if(this.checked){
				document.getElementById("label_"+id).style.display="block";
			}else{
				document.getElementById("label_"+id).style.display="none";
			}
		};
	}

	// назначение обработчиков маркерам групп
	var list=map.getElementsByClassName('metromap_group');
	cnt=list.length;
	for (i=0;i<cnt;i++){
		list[i].onclick=function(){
			var group=this.getAttribute("data-group_id");
			var mapid=this.getAttribute("data-mapid");
			var cnt=metromap_groups[group].length;
			for(var i=2;i<cnt;i++)	{
				var o=document.getElementById(mapid+metromap_groups[group][i]);
				if(o!=undefined) {o.checked=true;o.onchange();}
			}
		};
	}
}

/*
function save_metro()
{
	var c="";
	$( ".map_markers input:checked" ).each(function( index )
	{
		c+=$( this ).val()+" ";
	});

	if(c=="") return false;
	c="metro="+c;
	document.cookie=c;
alert("Сохранили в куку: ["+c+"]");
	return true;
}
function load_metro()
{
	var c=metro_getCookie("metro");
	if(c!="")
	{
		ca=c.split(' ');
		$(".map_markers input").prop("checked",false);
		for(var i=0; i<ca.length; i++) {
        	var c = ca[i];
			$("#m"+c).prop("checked",true).change();
		}
    }
}

function show_metro()
{
	$("#metro").show();
}

function metro_getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}*/
//function metro_change_status(){var id=$(this).val();if($(this).prop("checked")){$("#l"+id).show();}else{$("#l"+id).hide();}}
//function metro_sel_group(id){	var cnt=groups[id].length;for(var i=2;i<cnt;i++)	{$("#m"+groups[id][i]).prop("checked",true).change();}}
/*
$(document).ready(function(){
	InitMetro();
});
*/