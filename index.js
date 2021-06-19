let map;
let infoWindow;
let restaurants = [];
let educations = [];
let coffees = [];
let residentials = [];
let bus_stops = [];
let libraries = [];
let buildings = [];
let banks = [];
let hospitals = [];
let markets = [];



function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
	mapId: "a86242c8e0d64135",
    zoom: 16,
    center: {lat:37.172275706158445, lng:38.99851934910794},
  });

  // Ikon Boyutu
  var ScaledSize = new google.maps.Size(40,40);


  // Ikonlar
  var restaurant = {
    url: "https://i.hizliresim.com/bGXuHt.png", // url
    scaledSize: ScaledSize,
  };
  var education = {
    url: "https://i.hizliresim.com/5iYgHq.png", // url
    scaledSize: ScaledSize,
  };
  var coffee = {
    url: "https://i.hizliresim.com/Od1pML.png", // url
    scaledSize: ScaledSize,
  };
  var residential = {
    url: "https://i.hizliresim.com/fx3aQ7.png", // url
    scaledSize: ScaledSize,
  };
  var bus_stop = {
    url: "https://i.hizliresim.com/JZgV9q.png", // url
    scaledSize: ScaledSize,
  };
  var library = {
    url: "https://i.hizliresim.com/FAl4nJ.png", // url
    scaledSize: ScaledSize,
  };
  var building = {
    url: "https://i.hizliresim.com/PsTlpo.png", // url
    scaledSize: ScaledSize,
  };
  var bank = {
    url: "https://i.hizliresim.com/jVT0FM.png", // url
    scaledSize: ScaledSize,
  };
  var hospital = {
    url: "https://i.hizliresim.com/DJDHIP.png", // url
    scaledSize: ScaledSize,
  };
  var market = {
    url: "https://i.hizliresim.com/xnNyMk.png", // url
    scaledSize: ScaledSize,
  };


  // Markerlar
  const marker1 = new google.maps.Marker({
          position: {lat:37.16605079205016, lng:38.99533205385454},
          map: map,
		  title: "Osmanbey Kampusu",
		  icon: building
  });

  const marker2 = new google.maps.Marker({
          position: {lat: 37.17239028295666, lng:39.00339677648729},
          map: map,
		  title: "Muhendislik Fakultesi",
		  icon: education
  });

  const marker3 = new google.maps.Marker({
          position: {lat:37.17365338176775, lng:39.002263543160666},
          map: map,
		  title: "Iktisadi ve Idari Bilimler Fakultesi",
		  icon: education
  });

  const marker4 = new google.maps.Marker({
          position: {lat:37.17338518297225, lng:38.99953394218842},
          map: map,
		  title: "Hacer Ana Kiz Yurdu",
		  icon: building
  });

  const marker5 = new google.maps.Marker({
          position: {lat:37.172049567314076, lng:39.00435541589098},
          map: map,
		  title: "GAPYENEV",
		  icon: building
  });

  const marker6 = new google.maps.Marker({
          position: {lat:37.171229392966005, lng:39.00577296334369},
          map: map,
		  title: "Beden Egitimi ve Spor Yuksekokulu",
		  icon: education
  });

  const marker7 = new google.maps.Marker({
          position: {lat:37.171893227563814, lng:39.00248486794386},
          map: map,
		  title: "Makine Muhendisligi",
		  icon: education
  });

  const marker8 = new google.maps.Marker({
          position: {lat:37.16944125498671, lng:38.99726107229062},
          map: map,
		  title: "Gol Cafe",
		  icon: coffee
  });

  const marker9 = new google.maps.Marker({
          position: {lat:37.171681305031434, lng:39.002131181309224},
          map: map,
		  title: "Bilgisayar Muhendisligi",
		  icon: education
  });

  const marker10 = new google.maps.Marker({
          position: {lat:37.170533318106735, lng:39.00202500763554},
          map: map,
		  title: "Ziraat Fakultesi",
		  icon: education
  });

  const marker11 = new google.maps.Marker({
          position: {lat:37.169704416188814, lng:39.00030519019578},
          map: map,
		  title: "Merkezi Kafeterya",
		  icon: restaurant
  });

  const marker12 = new google.maps.Marker({
          position: {lat:37.16887545762745, lng:39.000349360667904},
          map: map,
		  title: "Fen Edebiyat Fakultesi",
		  icon: education
  });

  const marker13 = new google.maps.Marker({
          position: {lat:37.16817845665516, lng:39.00124791091935},
          map: map,
		  title: "Egitim Fakultesi",
		  icon: education
  });

  const marker14 = new google.maps.Marker({
          position: {lat:37.16851852675288, lng:38.99612949184032},
          map: map,
		  title: "Ilahiyat Fakultesi",
		  icon: education
  });

  const marker15 = new google.maps.Marker({
          position: {lat:37.168426715053485, lng:38.99444455307809},
          map: map,
		  title: "Tip Fakultesi",
		  icon: education
  });

  const marker16 = new google.maps.Marker({
          position: {lat:37.16724081753197, lng:38.99546546896734},
          map: map,
		  title: "Kapali Yuzme Havuzu",
		  icon: building
  });

  const marker17 = new google.maps.Marker({
          position: {lat:37.169575371964115, lng:38.99604938436144},
          map: map,
		  title: "El Battani Kutuphanesi",
		  icon: library
  });

  const marker18 = new google.maps.Marker({
          position: {lat:37.168880041742185, lng:38.9912453296294},
          map: map,
		  title: "Arastirma ve Uygulama Hastanesi",
		  icon: hospital
  });

  const marker19 = new google.maps.Marker({
          position: {lat:37.16855035628176, lng:38.99074845040566},
          map: map,
		  title: "Cafeterya",
		  icon: coffee
  });

  const marker20 = new google.maps.Marker({
          position: {lat:37.168161874445126, lng:38.991540018356666},
          map: map,
		  title: "Isbank ATM",
		  icon: bank
  });

  const marker21 = new google.maps.Marker({
          position: {lat:37.168782194961125, lng:38.99563684044616},
          map: map,
		  title: "Rektorluk",
		  icon: building
  });

  const marker22 = new google.maps.Marker({
          position: {lat:37.168335282527565, lng:38.99793632150957},
          map: map,
		  title: "Beytat Market",
		  icon: market
  });

  const marker23 = new google.maps.Marker({
          position: {lat:37.16957707592934, lng:38.99704716919976},
          map: map,
		  title: "PTT ATM",
		  icon: bank
  });

  const marker24 = new google.maps.Marker({
          position: {lat:37.16940341844289, lng:38.99751588523255},
          map: map,
		  title: "Isbank ATM",
		  icon: bank
  });

  const marker25 = new google.maps.Marker({
          position: {lat:37.17622853872515, lng:38.99430714815018},
          map: map,
		  title: "Kampus Camii",
		  icon: building
  });

  const marker26 = new google.maps.Marker({
          position: {lat:37.16614873609181, lng:38.99481490076283},
          map: map,
		  title: "Isbank ATM",
		  icon: bank
  });

  const marker27 = new google.maps.Marker({
          position: {lat:37.16559302643406, lng:38.99590579498595},
          map: map,
		  title: "Otobus Duragi",
		  icon: bus_stop
  });

  const marker28 = new google.maps.Marker({
          position: {lat:37.17242071840365, lng:39.002185085886865},
          map: map,
		  title: "Insaat Muhendisligi",
		  icon: education
  });

  const marker29 = new google.maps.Marker({
          position: {lat:37.17233843461795, lng:39.002574006203},
          map: map,
		  title: "Cevre Muhendisligi",
		  icon: education
  });

  const marker30 = new google.maps.Marker({
          position: {lat:37.17282251843252, lng:38.994357058771406},
          map: map,
		  title: "Lojmanlar",
		  icon: residential
  });


  restaurants.push(marker11);
  educations.push(marker2,marker3,marker6,marker7,marker9,marker10,marker12,marker13,marker14,marker15,marker28,marker29);
  coffees.push(marker8,marker19);
  residentials.push(marker30);
  bus_stops.push(marker27);
  libraries.push(marker17);
  buildings.push(marker1,marker4,marker5,marker16,marker21,marker25);
  banks.push(marker20,marker23,marker24,marker26);
  hospitals.push(marker18);
  markets.push(marker22);




  // Marker Event'larý

  // Osmanbey Kampüsü
  google.maps.event.addListener(marker1,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">Osmanbey Kamp&#252;s&#252;</h1>' +
		'<div id="bodyContent">' +
		"<img src='http://harran.edu.tr/cms/Upload/1200x1200/23b03c00-b1ad-4f97-88be-2949d3038713.jpg' width='300' height='200'> &#160;" +
		"<img src='http://harran.edu.tr/cms/images/OSMANBEY%20YERLE%C5%9EKE%20%C4%B0%C3%87%20SAYFA%201.JPG' width='300' height='200'>" +
		"<p>&#350;anl&#305;urfa- Mardin Karayolu&#39;nun 18. Kilometresinde 27.000 d&#246;n&#252;ml&#252;k bir arazi &#252;zerinde in&#351;aat edilen &#252;niversitemiz " +
		"merkez yerle&#351;kesinde, Fen-Edebiyat, M&#252;hendislik, &#304;ktisadi ve idari Bilimler, &#304;lahiyat, E&#287;itim, Ziraat,Sa&#287;l&#305;k Bilimleri,T&#305;p ve " +
		"G&#252;zel Sanatlar Fak&#252;lteleri ile Beden E&#287;itimi ve Spor Y&#252;ksekokulu,Turizm ve Otel &#304;&#351;letmecili&#287;i Y&#252;ksekokulu,  Devlet " +
		"Konservatuvar&#305;  E&#287;itim-&#214;&#287;retim vermektedir. Alt yap&#305; &#231;al&#305;&#351;malar&#305; tamamlanm&#305;&#351;, T&#252;rkiye&#39;nin en b&#252;y&#252;k &#252;niversite " +
		"yerle&#351;kelerinden biri olan ve i&#231;erisinde Kredi Yurtlar Kurumuna ba&#287;l&#305; 2000 &#246;&#287;renci kapasiteli K&#305;z &#246;&#287;renci yurtlar&#305; hizmet " +
		"vermektedir. Ayr&#305;ca i&#231;inde bir Yapay G&#246;l bar&#305;nd&#305;ran Osmanbey Yerle&#351;kesinde Atat&#252;rk Arboretumu, El-Battani " +
		"K&#252;t&#252;phanesi, 5000  ki&#351;ilik Merkezi Kafeterya, Sosyal Tesisler,Amfi Tiyatro, lojmanlar, &#220;niversitemiz spor " +
		"faaliyetlerinde kullan&#305;lan Olimpik Kapal&#305; Y&#252;zme Havuzu ve 3000 ki&#351;i kapasiteli Kapal&#305; Spor Salonu in&#351;aat&#305; tamamlanm&#305;&#351; " +
		"olup hizmet vermektedir. Di&#287;er binalar&#305;n in&#351;aat&#305; h&#305;zla devam etmektedir.</p>" +
		'<p><a href="http://harran.edu.tr/">' +
		"<b>Web Sitesi</b></a> </p>" +
		'<p><a href="https://www.google.com.tr/maps/dir//G%C3%BClveren,+Osmanbey+Yerle%C5%9Fkesi,+63290+%C5%9Eanl%C4%B1urfa+Merkez%2F%C5%9Eanl%C4%B1urfa/@37.1660625,38.9942182,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15345d825775ea85:0xc674ed3795d42cf9!2m2!1d38.9953296!2d37.1660384">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker1);
  });

  // Mühendislik Fakültesi
  google.maps.event.addListener(marker2,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">M&#252;hendislik Fak&#252;ltesi</h1>' +
		'<div id="bodyContent">' +
		"<img src='http://web.harran.edu.tr/assets/uploads/sites/47/slides/619c217ed7c792ac19afe2b691e58dfc.jpg' width='300' height='200'> &#160;" +
		"<img src='https://www.balikligol.com/images/haberler/35497.jpg' width='300' height='200'>" +
		"<p> Bilgisayar M&#252;hendisli&#287;i, &#199;evre M&#252;hendisli&#287;i, Elektrik & Elektronik M&#252;hendisli&#287;i, End&#252;stri M&#252;hendisli&#287;i " +
		"G&#305;da M&#252;hendisli&#287;i, Harita M&#252;hendisli&#287;i, &#304;n&#351;aat M&#252;hendisli&#287;i, Makine M&#252;hendisli&#287;i ve Yaz&#305;l&#305;m M&#252;hendisli&#287;i b&#246;l&#252;mlerini " +
		"bar&#305;nd&#305;ran M&#252;hendislik Fak&#252;ltesi, bilimsel ara&#351;t&#305;rmalar yoluyla evrensel bilimi ilerleten katk&#305;lar yapmay&#305; g&#246;rev edinmi&#351;tir. " +
		"B&#252;nyesinde 103 adet akademik personel, 21 adet idari personel ve 7 adet destek personeli bulundurmaktad&#305;r. </p> " +
		'<p><a href="http://web.harran.edu.tr/muhendis/tr/">' +
		"<b>Web Sitesi</b></a> </p>" +
		'<p><a href="https://www.google.com.tr/maps/dir//Harran+%C3%9Cniversitesi+Muhendislik+Fak%C3%BCltesi,+Harran+%C3%9Cniversitesi+Osmanbey+Kamp%C3%BCs%C3%BC+GAPYENEV+Binas%C4%B1,+63290+Haliliye%2F%C5%9Eanl%C4%B1urfa/@37.1719272,39.0013127,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15345dbbf6b00445:0x6e6261a0b086fc7d!2m2!1d39.003397!2d37.172382">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker2);
  });

  // Ýktisadi ve Ýdari Bilimler Fakültesi
  google.maps.event.addListener(marker3,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">&#304;ktisadi ve &#304;dari Bilimler Fak&#252;ltesi</h1>' +
		'<div id="bodyContent">' +
		"<img src='http://iibf.harran.edu.tr/assets/uploads/sites/126/slides/21c83e6a08fde9e365f0d34a481db880.jpg' width='550' height='200'>" +
		"<p> Fak&#252;ltemizin kurulu&#351;u Milli E&#287;itim Bakanl&#305;&#287;&#305;&#39;n&#305;n 28.06.1995 tarih ve 16923 say&#305;l&#305; yaz&#305;s&#305; &#252;zerine 2809 Say&#305;l&#305; " +
		"kanunun Ek 30. maddesine g&#246;re Bakanlar Kurulu taraf&#305;ndan 04.07.1995 tarihinde kararla&#351;t&#305;r&#305;lm&#305;&#351;t&#305;r. " +
		"Ekonometri, &#304;ktisat, &#304;&#351;letme, Kamu Y&#246;netimi, Maliye ve Y&#246;netim Bili&#351;im Sistemleri b&#246;l&#252;mleri a&#231;&#305;lm&#305;&#351; olup &#304;&#351;letme, " +
		"Kamu Y&#246;netimi, Maliye ve &#304;ktisat (B&#246;lgesel Kalk&#305;nma) b&#246;l&#252;mleri lisans, y&#252;ksek lisans ve doktora d&#252;zeyinde, " +
		"Ekonometri  ise sadece lisans d&#252;zeyinde e&#287;itim vermektedir. </p>" +
		'<p><a href="http://iibf.harran.edu.tr/">' +
		"<b>Web Sitesi</b></a> </p>" +
		'<p><a href="https://www.google.com.tr/maps/dir//Harran+%C3%9Cniversitesi+%C4%B0ktisadi+Ve+%C4%B0dari+Bilimler+Fak%C3%BCltesi,+G%C3%BClveren+Mh.+%C5%9Eanl%C4%B1urfa+Mardin+Yolu,+Merkez+Pk:63000/@37.1734959,39.0029006,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15345d830885d46f:0xb6406c89e049766d!2m2!1d39.0022635!2d37.1736443">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker3);
  });

  // Hacer Ana Kýz Yurdu
  google.maps.event.addListener(marker4,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">Hacer Ana K&#305;z Yurdu</h1>' +
		'<div id="bodyContent">' +
		"<img src='https://dersinozu.com/wp-content/uploads/2019/12/%C5%9Eanl%C4%B1urfa-Hacer-Ana-KYK-K%C4%B1z-%C3%96%C4%9Frenci-Yurdu.png' width='600' height='250'>" +
		"<p> Osmanbey Kamp&#252;s&#252; i&#231;erisinde yer alan KYK K&#305;z Yurdu, " +
		"g&#252;venlik ve temizlik hizmetlerinin yan&#305;s&#305;ra b&#252;nyesindeki " +
		"yemekhanede kahvalt&#305; ve ak&#351;am yeme&#287;i hizmeti sa&#287;lamaktad&#305;r. " +
		"Yurtta &#231;ama&#351;&#305;r odas&#305;, &#252;t&#252; odas&#305; ve revir de mevcuttur. </p> " +
		"<p><b>Telefon: </b> (0414) 376 1042 / (0414) 376 1044 </p>" +
		'<p><a href="https://www.google.com.tr/maps/dir//G%C3%BClveren,+Hacer+Ana+Kiz+Yurdu,+Tayip+Erdo%C4%9Fan+Bulvar%C4%B1,+Mardin+Yolu+20.+Km+Harran+%C3%9Cniversitesi+Osmanbey+Kampus%C3%BC+%C4%B0%C3%A7i,+63320+Haliliye%2F%C5%9Eanl%C4%B1urfa/@37.1733055,38.9992636,20z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15347aea229a25c1:0x8b17140c3f37b3f3!2m2!1d38.9995337!2d37.1733804">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker4);
  });

  // GAPYENEV
  google.maps.event.addListener(marker5,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">GAPYENEV</h1>' +
		'<div id="bodyContent">' +
		"<img src='http://gapyenev.harran.edu.tr/assets/uploads/sites/256/slides/81fad647d04170d3844066982f801cdc.jpg' width='600' height='300'>" +
		"<p> Merkezin amac&#305;, GAP B&#246;lgesinde bulunan t&#252;m &#252;niversite, " +
		"sanayi, kamu ve &#246;zel kurulu&#351;lar ile potansiyel giri&#351;imcilerin" +
		"yararlanabilece&#287;i bir &#39;Yenilenebilir Enerji ve Enerji Verimlili&#287;i Merkezi&#39;" +
		"altyap&#305;s&#305; kurmakt&#305;r. Nitelikli e&#287;itim imkanlar&#305;n&#305;n, yeni" +
		"teknolojik bulu&#351;lara destek verecek, b&#246;lgeye yeni yat&#305;r&#305;mlar&#305;" +
		"cazip k&#305;lacak, ulusal ve uluslararas&#305; firmalar ile" +
		"ara&#351;t&#305;rma merkezleri aras&#305;nda i&#351;birli&#287;i f&#305;rsatlar&#305; yaratacak merkez" +
		"as&#305;tas&#305;yla, b&#246;lgenin zengin yenilenebilir enerji potansiyeli" +
		"ve enerji verimlili&#287;i olanaklar&#305; b&#246;lge i&#231;in &#246;nemli bir f&#305;rsata d&#246;n&#252;&#351;&#252;yor. </p> " +
		'<p><a href="http://gapyenev.harran.edu.tr/tr/">' +
		"<b>Web Sitesi</b></a> </p>" +
		'<p><a href="https://www.google.com.tr/maps/dir//GAP+YENEV,+Harran+%C3%9Cniversitesi+Osmanbey+Kamp%C3%BCs%C3%BC+GAPYENEV+Binas%C4%B1,+63290+Haliliye%2F%C5%9Eanl%C4%B1urfa/@37.1720433,39.0032617,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15345dbf1c4c2269:0x57f87b4104e49e20!2m2!1d39.004356!2d37.1720433">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker5);
  });

  // Beden Eðitimi ve Spor Yüksekokulu
  google.maps.event.addListener(marker6,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">Beden E&#287;itimi ve Spor Y&#252;ksekokulu</h1>' +
		'<div id="bodyContent">' +
		"<img src='http://besyo.harran.edu.tr/assets/uploads/sites/91/gallery/94_7.jpg' width='300' height='200'> &#160;" +
		"<img src='http://besyo.harran.edu.tr/assets/uploads/sites/91/slides/5ae5ce7bec0e8208baa1ebbba23f94b6.jpg' width='300' height='200'>" +
		"<p>Y&#252;ksekokulumuz; Atat&#252;rk devrim ve ilkeleri do&#287;rultusunda, " +
		"akl&#305;n ve bilimin rehberli&#287;ine dayanarak, yenilik&#231;i, " +
		"geli&#351;melere a&#231;&#305;k, teknolojik at&#305;l&#305;mlar&#305; yak&#305;ndan takip eden " +
		"bir vizyonu benimsemektedir. Spor bilimleri " +
		"ve teknolojileri alan&#305;nda lider bir kurum olmay&#305; " +
		"hedefleyerek &#231;a&#287;da&#351; spor e&#287;itimi ve &#246;&#287;retimi programlar&#305;n&#305; " +
		"y&#252;r&#252;tmektedir. Y&#252;ksekokulumuz; misyonu do&#287;rultusunda " +
		"&#231;a&#287;da&#351;, evrensel de&#287;erlere sahip, kazand&#305;&#287;&#305; bilgi ve " +
		"becerileri uygulamaya yans&#305;tabilen &#252;st&#252;n " +
		"nitelikli bireyler yeti&#351;tirmeyi ama&#231; edinmi&#351;tir. </p>" +
		'<p><a href="http://besyo.harran.edu.tr/">' +
		"<b>Web Sitesi</b></a> </p>" +
		'<p><a href="https://www.google.com.tr/maps/dir//G%C3%BClveren,+Mehmet+Arabac%C4%B1+Beden+E%C4%9Fitmi+ve+Spor+Y%C3%BCksekokulu,+63290+%C5%9Eanl%C4%B1urfa+Merkez%2F%C5%9Eanl%C4%B1urfa/@37.1712122,39.0015804,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15345d97071db101:0x24faa94ec6f4e908!2m2!1d39.0057728!2d37.1712185">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker6);
  });

  // Makine Mühendisliði
  google.maps.event.addListener(marker7,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">Makine M&#252;hendisli&#287;i</h1>' +
		'<div id="bodyContent">' +
		"<img src='http://web.harran.edu.tr/assets/uploads/sites/57/slides/66f95899fbf8f4051340ea153ec2f9ab.jpg' width='550' height='250'>" +
		"<p>Makina m&#252;hendisli&#287;i b&#246;l&#252;m&#252;, 1993 y&#305;l&#305;ndan itibaren " +
		"&#246;&#287;renci almaya ba&#351;lam&#305;&#351;t&#305;r, d&#246;rt y&#305;ll&#305;k bir " +
		"lisans program&#305;d&#305;r. Harran &#220;niversitesi Makina " +
		"M&#252;hendisli&#287;i B&#246;l&#252;m&#252;nde 2019 itibariyle; " +
		"Mekanik Anabilim Dal&#305;nda 1 Profes&#246;r, " +
		"1 Do&#231;ent; Konstr&#252;ksiyon ve &#304;malat Anabilim " +
		"Dal&#305;nda 1 Profes&#246;r,1 Do&#231;ent; Termodinamik " +
		"Anabilim Dal&#305;nda 1 Profes&#246;r, 2 Doktor &#214;&#287;retim " +
		"&#220;yesi; Enerji Anabilim Dal&#305;nda 1 Profes&#246;r, " +
		"1 Do&#231;ent, 1 Doktor &#214;&#287;retim &#220;yesi; Makina " +
		"Teorisi ve Dinami&#287;i Anabilim Dal&#305;nda 1 Doktor " +
		"&#214;&#287;retim &#220;yesi olmak &#252;zere 11 &#214;&#287;retim &#220;yesi, " +
		"1 Dr. &#214;&#287;retim G&#246;revlisi, 2 &#214;&#287;retim G&#246;revlisi " +
		"ve 4 Ara&#351;t&#305;rma G&#246;revlisi bulunmaktad&#305;r. </p>" +
		'<p><a href="http://web.harran.edu.tr/makina/tr/">' +
		"<b>Web Sitesi</b></a> </p>" +
		'<p><a href="https://www.google.com.tr/maps/dir//G%C3%BClveren,+Harran+%C3%9Cniversitesi+Makina+M%C3%BChendisli%C4%9Fi,+%C5%9Eanl%C4%B1urfa+Mardin+Yolu,+63290+Haliliye%2F%C5%9Eanl%C4%B1urfa/@37.1718832,39.0002977,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15345d90c6fe0231:0xaefcdaa7319fdb19!2m2!1d39.0024864!2d37.1718832">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker7);
  });

  // Göl Cafe
  google.maps.event.addListener(marker8,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">G&#246;l Cafe</h1>' +
		'<div id="bodyContent">' +
		"<img src='https://lh5.googleusercontent.com/p/AF1QipNg9cdwR6qoM90ninimKNDEo_go0mxazwZlbktk=w408-h544-k-no' width='300' height='200'>" +
		"<p>Kamp&#252;s i&#231;erisinde bulunan G&#246;l Cafe, " +
		"<br>g&#246;l manzaras&#305;na kar&#351;&#305;, &#231;e&#351;itli men&#252;s&#252; </br>" +
		"ile &#246;&#287;rencilere hizmet vermektedir.</p>" +
		'<p><a href="https://www.google.com.tr/maps/dir//G%C3%BClveren,+G%C3%B6l+Cafe,+63290+Haliliye%2F%C5%9Eanl%C4%B1urfa/@37.1694323,38.9950728,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15345d84c68cd3b9:0x93360c87f33bf6c4!2m2!1d38.9972615!2d37.1694323">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker8);
  });

  // Bilgisayar Mühendisliði
  google.maps.event.addListener(marker9,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">Bilgisayar M&#252;hendisli&#287;i</h1>' +
		'<div id="bodyContent">' +
		"<img src='http://web.harran.edu.tr/assets/uploads/other/files/bilgisayar/images/1_%2814%29.jpg' width='600' height='300'>" +
		"<p>Harran &#220;niversitesi Bilgisayar M&#252;hendisli&#287;i B&#246;l&#252;m&#252;, 2004 y&#305;l&#305;nda M&#252;hendislik Fak&#252;ltesi b&#252;nyesinde kurulmu&#351; " +
		"olup ilk  olarak 2005-2006 y&#305;l&#305;nda 30 &#246;&#287;renci ile lisans d&#252;zeyinde e&#287;itim vermeye ba&#351;lam&#305;&#351;t&#305;r. " +
		"Program&#305;n e&#287;itim/&#246;&#287;retim dili T&#252;rk&#231;e&#39;dir. Bilgisayar M&#252;hendisli&#287;i B&#246;l&#252;m&#252;, T&#252;rkiye&#39;nin en b&#252;y&#252;k " +
		"projelerinden biri olan GAP&#39;&#305;n merkezinde &#350;anl&#305;urfa ve &#231;evre illerinde eksikli&#287;i &#351;iddetle " +
		"hissedilen Bilgisayar M&#252;hendisi a&#231;&#305;&#287;&#305;n&#305;n kapat&#305;lmas&#305;n&#305; sa&#287;lamak ve bu ulusal " +
		"projede teknolojinin uygulanmas&#305;nda  gerekli deste&#287;i vermeyi hedeflemektedir. </p>" +
		'<p><a href="http://web.harran.edu.tr/bilgisayar">' +
		"<b>Web Sitesi</b></a> </p>" +
		'<p><a href="https://www.google.com.tr/maps/dir//G%C3%BClveren,+Harran+Bilgisayar+M%C3%BCh,+63290+Haliliye%2F%C5%9Eanl%C4%B1urfa/@37.1718865,39.0024582,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15345d90be42f39f:0xe2175ff3ac1c7b45!2m2!1d39.0021302!2d37.1716715">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker9);
  });

  // Ziraat Fakültesi
  google.maps.event.addListener(marker10,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">Ziraat Fak&#252;ltesi</h1>' +
		'<div id="bodyContent">' +
		"<img src='http://ziraat.harran.edu.tr/assets/uploads/sites/52/gallery/510_12.jpg' width='600' height='250'>" +
		"<p>1978 y&#305;l&#305;nda Dicle &#220;niversitesi&#39;ne ba&#287;l&#305; olarak kurulan Ziraat Fak&#252;ltesi 1992 y&#305;l&#305;nda Harran &#220;niversitesi " +
		"b&#252;nyesine dahil edilmi&#351;tir. O tarihten bu yana, Fak&#252;ltemiz G&#252;neydo&#287;u Anadolu B&#246;lgesi&#39;nde &#246;nc&#252; g&#246;revi " +
		"&#252;stlenmi&#351; olup, bu g&#246;revini g&#252;n&#252;m&#252;zde de halen devam ettirmektedir.  Kurulu&#351;undan bu yana, b&#246;lgenin " +
		"tar&#305;msal sorunlar&#305;n&#305;n &#231;&#246;z&#252;m&#252;ne ve mesleki e&#287;itime b&#252;y&#252;k katk&#305; sa&#287;lamas&#305; yan&#305;nda bir &#231;ok tar&#305;msal konuda " +
		"uzmanlar yeti&#351;tirmi&#351;tir. Dinamik ve gen&#231; bir akademik kadroya sahip olan fak&#252;ltemiz, b&#246;lge ile birlikte &#252;lkenin " +
		"tar&#305;msal sorunlar&#305;na &#231;&#246;z&#252;m getirme konusunda &#246;nemli katk&#305;lar sa&#287;lamaktad&#305;r. </p>" +
		'<p><a href="http://ziraat.harran.edu.tr/">' +
		"<b>Web Sitesi</b></a> </p>" +
		'<p><a href="https://www.google.com.tr/maps/dir//G%C3%BClveren,+Harran+%C3%9Cniversitesi+Ziraat+Fak%C3%BCltesi,+Osmanbey+Yerle%C5%9Fkesi,+63290+Merkez%2FHaliliye%2F%C5%9Eanl%C4%B1urfa/@37.1695125,38.9974935,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15345d90a82dd50f:0x5bd2adfa8d1f374!2m2!1d39.0020228!2d37.1705223">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker10);
  });

  // Merkezi Kafeterya
  google.maps.event.addListener(marker11,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">Merkezi Kafeterya</h1>' +
		'<div id="bodyContent">' +
		"<img src='http://ilan.harran.edu.tr/imgkampus/kafeterya/mkafeterya2.JPG' width='300' height='200'> &#160;" +
		"<img src='http://ilan.harran.edu.tr/imgkampus/kafeterya/mkafeterya4.JPG' width='300' height='200'>" +
		"<p>Osmanbey Yerle&#351;kesinde bulunan be&#351; bin ki&#351;ilik merkezi kafeteryada Akademik, &#304;dari ve " +
		"&#246;&#287;renci yemek salonlar&#305;, 453 koltuk kapasiteli &#231;ok ama&#231;l&#305; bir salon, bir internet kafe, sergi " +
		"salonu, &#231;e&#351;itli etkinlikler i&#231;in kullan&#305;lan salonlar&#305; ve en &#252;st kat&#305;nda on d&#246;rt oda ve 29 yatakl&#305; " +
		"misafirhane mevcuttur. </p>" +
		'<p><a href="http://ilan.harran.edu.tr/kafeterya.htm">' +
		"<b>Web Sitesi</b></a> </p>" +
		'<p><a href="https://www.google.com.tr/maps/dir//G%C3%BClveren,+Merkezi+Kafeterya,+63290+Haliliye%2F%C5%9Eanl%C4%B1urfa/@37.1695125,38.9974935,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15345d9afa6cd28f:0xf1613f8eb1f28d8d!2m2!1d39.0003048!2d37.1696946">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker11);
  });

  // Fen Edebiyat Fakültesi
  google.maps.event.addListener(marker12,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">Fen Edebiyat Fak&#252;ltesi</h1>' +
		'<div id="bodyContent">' +
		"<img src='http://web.harran.edu.tr/assets/uploads/sites/65/slides/41082ec451aec13deba37d9fc5b2f836.jpg' width='600' height='250'>" +
		"<p>1992 y&#305;l&#305;nda Harran &#220;niversitesi b&#252;nyesinde kurulan Fen Edebiyat Fak&#252;ltemiz Fizik, Kimya, Biyoloji, " +
		"Matematik, T&#252;rk Dili ve Edebiyat&#305;, Tarih, Co&#287;rafya, Arkeoloji, Sosyoloji, Sanat Tarihi, Do&#287;u Dilleri ve Edebiyatlar&#305;, " +
		"Bat&#305; Dilleri ve Edebiyatlar&#305;, Molek&#252;ler Biyoloji ve Genetik b&#246;l&#252;mleri olmak &#252;zere toplam 13 b&#246;l&#252;mden " +
		"olu&#351;maktad&#305;r. Bu b&#246;l&#252;mlerde alan&#305;na hakim donan&#305;ml&#305; e&#287;itimci kadrosu ile lisans program&#305;, y&#252;ksek lisans ve " +
		"doktora e&#287;itimi verilmektedir. Fak&#252;ltemizden mezun olan &#246;&#287;rencilerimiz gerek kamuda gerekse &#246;zel sekt&#246;rde " +
		"bir&#231;ok alanda istihdam edilmektedir. </p>" +
		'<p><a href="http://fef.harran.edu.tr/">' +
		"<b>Web Sitesi</b></a> </p>" +
		'<p><a href="https://www.google.com.tr/maps/dir//Sultan+Fatih+Mahallesi,+Harran+%C3%9Cniversitesi+Fen+Edebiyat+Fak%C3%BCltesi,+Mardin+Yolu+%C3%9Czeri+20.km.+Osmanbey+Kamp%C3%BCs%C3%BC,+63290+Merkez%2FHaliliye%2F%C5%9Eanl%C4%B1urfa/@37.1695125,38.9974935,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1534671595555555:0xa2a0804915e02caf!2m2!1d39.0003491!2d37.1688664">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker12);
  });

  // Eðitim Fakültesi
  google.maps.event.addListener(marker13,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">E&#287;itim Fak&#252;ltesi</h1>' +
		'<div id="bodyContent">' +
		"<img src='https://fastly.4sqi.net/img/general/600x600/136286013_hYthCmWE2jM78_4wjkQyZSHaeJt5pcWT8gobZGc2cUA.jpg' width='600' height='250'>" +
		"<p>Harran &#220;niversitesi E&#287;itim Fak&#252;ltesi 29.07.2007 tarih ve 26597 say&#305;l&#305; kararname ile Resmi Gazete&#39;de " +
		"yay&#305;nlanarak kurulmu&#351;tur. Fak&#252;ltenin temel amac&#305; &#246;rg&#252;n e&#287;itimin her kademesi i&#231;in nitelikli &#246;&#287;retmenler ve " +
		"e&#287;itimciler yeti&#351;tirmektir. " +
		"Fak&#252;ltemiz, 2017-2018 E&#287;itim-&#214;&#287;retim Y&#305;l&#305;nda 8 B&#246;l&#252;m ile hizmet vermektedir. </p>" +
		'<p><a href="http://egitim.harran.edu.tr/">' +
		"<b>Web Sitesi</b></a> </p>" +
		'<p><a href="https://www.google.com.tr/maps/dir//G%C3%BClveren,+Harran+%C3%9Cniversitesi+E%C4%9Fitim+Fak%C3%BCltesi,+E+Blok,+63190+Merkez%2FHaliliye%2F%C5%9Eanl%C4%B1urfa/@37.1684353,38.99759,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15345d8305db8797:0x7b9da34043686d7a!2m2!1d39.0012485!2d37.1681703">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker13);
  });

  // Ýlahiyat Fakültesi
  google.maps.event.addListener(marker14,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">&#304;lahiyat Fak&#252;ltesi</h1>' +
		'<div id="bodyContent">' +
		"<img src='http://ilahiyat.harran.edu.tr/assets/uploads/sites/58/slides/3e4a17845286bba741a650f1ed9ae8d0.jpg' width='600' height='250'>" +
		"<p>Fak&#252;ltemiz, Temel &#304;slam Bilimleri, Felsefe ve Din Bilimleri ve &#304;slam Tarihi ve Sanatlar&#305; olmak &#252;zere &#252;&#231; b&#246;l&#252;mde " +
		"e&#287;itim faaliyetini s&#252;rd&#252;rmektedir. Bu b&#246;l&#252;mler akademik ve ara&#351;t&#305;rmaya y&#246;nelik b&#246;l&#252;mler olup lisans " +
		"seviyesinde &#246;&#287;renci kabul etmemektedirler. Temel &#304;slam Bilimleri ve &#304;slam Tarihi ve Sanatlar&#305; b&#246;l&#252;mleri " +
		"lisans&#252;st&#252; y&#252;ksek lisans ve doktora programlar&#305;na sahipken Felsefe ve Din Bilimleri b&#246;l&#252;m&#252; ise sadece y&#252;ksek " +
		"lisans program&#305;na sahiptir. </p>" +
		'<p><a href="http://ilahiyat.harran.edu.tr/">' +
		"<b>Web Sitesi</b></a> </p>" +
		'<p><a href="https://www.google.com.tr/maps/dir//G%C3%BClveren,+Harran+%C3%9Cniversitesi+%C4%B0lahiyat+Fak%C3%BCltesi,+Osmanbey+Kamp%C3%BCs%C3%BC,+63100+Haliliye%2F%C5%9Eanl%C4%B1urfa/@37.1684353,38.99759,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x153471c0734db053:0x2650376fe2f6052a!2m2!1d38.9961273!2d37.1685111">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker14);
  });

  // Týp Fakültesi
  google.maps.event.addListener(marker15,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">T&#305;p Fak&#252;ltesi</h1>' +
		'<div id="bodyContent">' +
		"<img src='http://tip.harran.edu.tr/assets/uploads/sites/45/slides/b6c12b93a2a9369f50d867640849198d.jpg' width='600' height='250'>" +
		"<p>T&#305;p Fak&#252;ltemiz, &#220;niversitemizin Osmanbey Kamp&#252;s&#252;nde yer almaktad&#305;r. Morfoloji binas&#305; ve Ara&#351;t&#305;rma ve " +
		"Uygulama hastanesi olmak &#252;zere 2 ayr&#305; binada e&#287;itim verilmektedir. 18.000 metrekare kapal&#305; alana sahip olan " +
		"Morfoloji binam&#305;zda amfiler, kantin, yemekhane, &#231;al&#305;&#351;ma salonlar&#305; ve laboratuvarlar yer almaktad&#305;r. Son d&#246;nem " +
		"teknolojiyle donat&#305;lm&#305;&#351; olan modern Ara&#351;t&#305;rma ve Uygulama Hastanemiz 684 yatak kapasitesine sahiptir. " +
		"Klinik &#246;ncesi D&#246;nem I, II, III e&#287;itim etkinlikleri T&#305;p Fak&#252;ltesi Morfoloji Binas&#305;&#39;nda yap&#305;lmaktad&#305;r. D&#246;nem IV, V, VI. y&#305;l " +
		"e&#287;itimleri ise a&#287;&#305;rl&#305;kl&#305; olarak Harran &#220;niversitesi Ara&#351;t&#305;rma ve Uygulama Hastanelerinde ger&#231;ekle&#351;mektedir. </p>" +
		'<p><a href="http://tip.harran.edu.tr/">' +
		"<b>Web Sitesi</b></a> </p>" +
		'<p><a href="https://www.google.com/maps/dir//Osmanbey+Yerle%C5%9Fkesi,+Harran+%C3%9Cniversitesi+T%C4%B1p+Fak%C3%BCltesi,+%C5%9Eanl%C4%B1urfa-Mardin+Karayolu+%C3%9Czeri+18.Km,+63290+Haliliye%2F%C5%9Eanl%C4%B1urfa/@37.1682145,38.993075,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x153471b4e374ff4d:0x3239568733a4aeaf!2m2!1d38.9944448!2d37.1684058">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker15);
  });

  // Kapalý Yüzme Havuzu
  google.maps.event.addListener(marker16,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">Kapal&#305; Y&#252;zme Havuzu</h1>' +
		'<div id="bodyContent">' +
		"<img src='http://sks.harran.edu.tr/assets/uploads/other/files/sks/images/havuz.jpg' width='600' height='300'>" +
		"<p>Harran &#220;niversitesi taraf&#305;ndan yapt&#305;r&#305;lan kapal&#305; y&#252;zme havuzu olimpik bir havuzdur. Haftan&#305;n 6 g&#252;n&#252; halka a&#231;&#305;k hizmet vermektedir. " +
		"Seanslar bay ve bayan ayr&#305; olacak &#351;ekilde &#246;zenle d&#252;zenlenmi&#351;tir. Dal&#305;&#351; yapmay&#305; sevenler havuzumuzda istedikleri gibi dal&#305;&#351; yapabilirler. " +
		"Y&#252;zme bilmeyenleri de d&#252;&#351;&#252;nen Harran &#220;niversitesi Kapal&#305; Y&#252;zme Havuzu y&#252;zme kurslar&#305; da vermektedir. Tesisimizde sadece havuz " +
		"de&#287;il, soyunma kabini ve wcde mevcuttur. G&#252;nl&#252;k giri&#351; &#252;creti &#246;deyerek yada havuzumuza &#252;yelik yapt&#305;r&#305;p sundu&#287;umuz imkanlardan. " +
		"yararlanabilirsiniz. </p> " +
		'<p><a href="http://sks.harran.edu.tr/tr/sosyal-tesisler/sosyal-tesisler-yuzme-havuzu/">' +
		"<b>Web Sitesi</b></a> </p>" +
		'<p><a href="https://www.google.com/maps/dir//Harran+%C3%9Cniversitesi+Beden+E%C4%9Fitimi+Ve+Spor+Y%C3%BCksek+Okulu,+G%C3%BClveren+Mh.+%C5%9Eanl%C4%B1urfa+Mardin+Yolu+Pk:63000+Merkez%2F%C5%9Fanl%C4%B1urfa/@37.1673425,38.9950974,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15345d83a7837b7d:0xe5a3d819b21f497e!2m2!1d38.995465!2d37.167194">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker16);
  });

  // El-Battani Kütüphanesi
  google.maps.event.addListener(marker17,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">El Battani K&#252;t&#252;phanesi</h1>' +
		'<div id="bodyContent">' +
		"<img src='http://library.harran.edu.tr/assets/uploads/sites/144/slides/b73d02b4997e78df87aadc318583166d.jpg' width='600' height='300'>" +
		"<p>Harran &#220;niversitesi Merkez K&#252;t&#252;phanesi b&#246;lge ihtiya&#231;lar&#305; do&#287;rultusunda ara&#351;t&#305;rma, e&#287;itim ve &#246;&#287;retim " +
		"ihtiya&#231;lar&#305;n&#305; kar&#351;&#305;lamak her t&#252;rl&#252; bilgi ve belgeye elektronik ortamda eri&#351;imi sa&#287;lamak, sa&#287;lanan bilgi ve " +
		"belgeleri b&#252;t&#252;n ara&#351;t&#305;rmac&#305;lara, &#220;niversite &#246;&#287;rencilerinin ve &#231;al&#305;&#351;anlar&#305;n&#305;n kullan&#305;m&#305;na her d&#252;zeydeki, kullan&#305;c&#305;ya " +
		"&#246;rg&#252;n ve yayg&#305;n bi&#231;imde hizmet vermektedir. </p>" +
		'<p><a href="http://library.harran.edu.tr/">' +
		"<b>Web Sitesi</b></a> </p>" +
		'<p><a href="https://www.google.com/maps/dir//G%C3%BClveren,+Harran+%C3%9Cniversitesi+El+Battani+K%C3%BCt%C3%BCphanesi,+63290+%C5%9Eanl%C4%B1urfa+Merkez%2F%C5%9Eanl%C4%B1urfa/@37.1688301,38.9950598,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15345d848d0a27b7:0xc704f822309988e9!2m2!1d38.9960481!2d37.1695546">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker17);
  });

  // Araþtýrma ve Uygulama Hastanesi
  google.maps.event.addListener(marker18,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">Ara&#351;t&#305;rma ve Uygulama Hastanesi</h1>' +
		'<div id="bodyContent">' +
		"<img src='https://www.gazeteipekyol.com/images/haberler/2020/08/harran_universitesi_hastanesi_nde_4_bashekim_yardimcisi_istifa_etti_-guncellendi_4b627.jpg' width='300' height='200'> &#160;" +
		"<img src='https://i4.hurimg.com/i/hurriyet/75/1200x675/57afcd21eb10bb1a58d418df.jpg' width='300' height='200'>" +
		"<p>Harran &#220;niversitesi T&#305;p Fak&#252;ltesi Hastanesi fiziki kapasitesi, donan&#305;m ve tecr&#252;beli doktorlar&#305; ile eksiksiz bir sa&#287;l&#305;k hizmeti sunmaktad&#305;r. " +
		"Hastane A,B,C,D Bloklar, teknik merkez ve buna ba&#287;l&#305; galeriden olu&#351;maktad&#305;r. " +
		"Toplam 118.000 metrekare kapal&#305; alana, 114.000 metrekare a&#231;&#305;k alana sahip hastanemizde helikopter pisti mevcuttur. " +
		"64 adet poliklinik, 510 adet hasta yata&#287;&#305;, 174 adet yo&#287;un bak&#305;m yata&#287;&#305;, 14 adet acil servis m&#252;&#351;ahede ve 1 adet izole yata&#287;&#305; ile " +
		"toplam 684 hasta yatak kapasitesi ile b&#246;lgesine hizmet vermektedir.</p>" +
		'<p><a href="http://hastane.harran.edu.tr/">' +
		"<b>Web Sitesi</b></a> </p>" +
		'<p><a href="https://www.google.com/maps/dir//G%C3%BClveren,+Harran+%C3%9Cniversitesi+Ara%C5%9Ft%C4%B1rma+Ve+Uygulama+Hastanesi,+%C5%9Eanl%C4%B1urfa+Mardin+Yolu,+63290+Haliliye%2F%C5%9Eanl%C4%B1urfa/@37.1686463,38.9915622,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x153471a4626ff91f:0x4ef2644cdb67123c!2m2!1d38.991244!2d37.1688714">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker18);
  });

  // Hastane Kafeteryasý
  google.maps.event.addListener(marker19,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">Ara&#351;t&#305;rma ve Uygulama Hastanesi Kafeteryas&#305;</h1>' +
		'<div id="bodyContent">' +
		"<img src='https://evgezmesi.com/storage/assets/p/28688-WQCCmmCfLAk6ZQxj.jpg' width='600' height='300'>" +
		"<p>Harran &#220;niversitesi E&#287;itim ve Ara&#351;t&#305;rma Hastanesi yan&#305;nda bulunan kafeterya hizmetine devam etmektedir.</p>" +
		'<p><a href="https://www.google.com/maps/dir//G%C3%BClveren,+Harran+%C3%9Cniversitesi+T%C4%B1p+Fak%C3%BCltesi+Hastanesi+Cafeterya,+63290+Haliliye%2F%C5%9Eanl%C4%B1urfa/@37.1688728,38.9912752,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15345d6bb13b9887:0xc624a7e9bdc7a2e4!2m2!1d38.9907474!2d37.1685378">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker19);
  });

  // Ýþbank ATM Hastane Yaný
  google.maps.event.addListener(marker20,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">&#304;&#351;bank ATM</h1>' +
		'<div id="bodyContent">' +
		"<img src='https://gorsel.isbank.com.tr/sttk/StaticFiles/Isbank/images/bu/atm1_03.jpg' width='300' height='300'>" +
		"<p>&#304;&#351;bank ATM hizmetinizdedir.</p>" +
		'<p><a href="https://www.google.com/maps/dir//G%C3%BClveren,+T%C3%BCrkiye+%C4%B0%C5%9F+Bankas%C4%B1+Bankamatik,+Harran+%C3%9Cniversitesi+Osmanbey+Kamp%C3%BCs%C3%BC,+63290+Haliliye%2F%C5%9Eanl%C4%B1urfa/@37.1680848,38.9920121,19z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15345d810ada4019:0x56ad355b8905dfcc!2m2!1d38.99154!2d37.168148">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker20);
  });

  //Rektörlük
  google.maps.event.addListener(marker21,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">Rekt&#246;rl&#252;k Binas&#305;</h1>' +
		'<div id="bodyContent">' +
		"<img src='https://pbs.twimg.com/media/EglyFvWX0AoOKNd.jpg' width='600' height='300'>" +
		"<p>Harran &#220;niversitesi&#39;nin yer ald&#305;&#287;&#305; &#350;anl&#305;urfa, g&#252;n&#252;m&#252;zden on bir bin y&#305;l &#246;ncesine dayanan tarihiyle Anadolu&#39;nun en eski kentlerinden biridir. " +
		"Arkeolojik kaynaklarda Bereketli Hilal olarak adland&#305;r&#305;lan b&#246;lge &#252;zerinde yer alan &#350;anl&#305;urfa, zengin Anadolu k&#252;lt&#252;r&#252; ile Mezopotamya " +
		"k&#252;lt&#252;r&#252;n&#252;n kesi&#351;me noktas&#305;nda bulundu&#287;undan engin bir k&#252;lt&#252;r birikimine sahiptir. &#220;niversitemize ad&#305;n&#305; veren tarihi Harran Kenti, " +
		"&#350;anl&#305;urfa&#39;n&#305;n 44 km. g&#252;neydo&#287;usunda yer alan, tarihte &#246;nemli olaylara sahne olmu&#351; bir kent merkezidir. Bir d&#246;nem Emeviler&#39;e ba&#351;kentlik de " +
		"yapan Harran&#39;&#305;n as&#305;l &#246;nemi &#304;slamiyet &#246;ncesinden bu yana &#246;nemli bir bilim merkezi olmas&#305;ndan kaynaklanmaktad&#305;r. D&#246;neminin &#252;niversitesi " +
		"say&#305;lan Harran Okulu&#39;nda astronomi, t&#305;p, matematik felsefe ve din alanlar&#305;nda &#246;nemli &#231;al&#305;&#351;malar yap&#305;lm&#305;&#351;t&#305;r. Harran g&#252;n&#252;m&#252;zde de bir turizm " +
		"beldesi olarak ilgi &#231;ekmeye devam etmektedir. </p>" +
		'<p><a href="https://www.harran.edu.tr/rektorluk.aspx">' +
		"<b>Web Sitesi</b></a> </p>" +
		'<p><a href="https://www.google.com/maps/dir//37.1687769,38.9955765/@37.1686518,38.9955135,19z">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker21);
  });

  // Beytat Market
  google.maps.event.addListener(marker22,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">Beytat Market</h1>' +
		'<div id="bodyContent">' +
		"<img src='https://www.ajansurfa.com/images/haberler/11834-0.jpeg' width='500' height='300'>" +
		"<p>Beytat Market, &#246;&#287;renci ya&#351;am merkezinde yer almaktad&#305;r ve hizmetine devam etmektedir.</p>" +
		'<p><a href="https://www.google.com/maps/dir//BEYTAT+MARKET,+%C3%96%C4%9Frenci+ya%C5%9Fam+merkezi+%C3%BCniversitesi+osmanbey+kampusu,+Harran%2F%C5%9Eanl%C4%B1urfa/@37.1681361,38.9964551,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15345d84ad9e6ccd:0x7afcc22fbfa29680!2m2!1d38.9979371!2d37.168328">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker22);
  });

  // PTT ATM
  google.maps.event.addListener(marker23,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">PTT ATM</h1>' +
		'<div id="bodyContent">' +
		"<img src='https://golcukhaber.com.tr/wp-content/uploads/2018/01/DSC_0004.jpg' width='300' height='400'>" +
		"<p>PTT ATM hizmetinizdedir.</p>" +
		'<p><a href="https://www.google.com/maps/dir//G%C3%BClveren,+PTT,+Harran+University+Branch,+63290+Haliliye%2F%C5%9Eanl%C4%B1urfa/@37.1688115,38.9976675,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15345d84c15dfe31:0x9c1e635b7887d104!2m2!1d38.9970466!2d37.1695685">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker23);
  });

  // Ýþbank ATM Göl Cafe Yaný
  google.maps.event.addListener(marker24,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">&#304;&#351;bank ATM</h1>' +
		'<div id="bodyContent">' +
		"<img src='https://gorsel.isbank.com.tr/sttk/StaticFiles/Isbank/images/bu/atm1_03.jpg' width='300' height='300'>" +
		"<p>&#304;&#351;bank ATM hizmetinizdedir.</p>" +
		'<p><a href="https://www.google.com/maps/dir//G%C3%BClveren,+%C4%B0%C5%9F+Bankas%C4%B1,+63290+Haliliye%2F%C5%9Eanl%C4%B1urfa/@37.1694377,38.997128,21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15345d84c8b47347:0x935f61f57dfc61b3!2m2!1d38.997516!2d37.1693903">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker24);
  });

  // Kampüs Camii
  google.maps.event.addListener(marker25,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">Kamp&#252;s Camii</h1>' +
		'<div id="bodyContent">' +
		"<img src='https://efsane1turk.net/efsaneuploads/Png_Cami_ve_Minare_Resimleri_V301220170857_N22.png' width='300' height='300'>" +
		"<p>Kamp&#252;s i&#231;erisinde yer almaktad&#305;r.</p>" +
		'<p><a href="https://www.google.com/maps/dir//G%C3%BClveren,+Harran+%C3%9Cniversitesi+Osmanbey+Kamp%C3%BCs+Cami,+63290+Haliliye%2F%C5%9Eanl%C4%B1urfa/@37.1746611,38.9971373,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15345d8ee0f7a8c1:0xa08ab0db639f26ae!2m2!1d38.994308!2d37.176219">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker25);
  });

  // Ýþbank ATM Kampüs Giriþi
  google.maps.event.addListener(marker26,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">&#304;&#351;bank ATM</h1>' +
		'<div id="bodyContent">' +
		"<img src='https://gorsel.isbank.com.tr/sttk/StaticFiles/Isbank/images/bu/atm1_03.jpg' width='300' height='300'>" +
		"<p>&#304;&#351;bank ATM hizmetinizdedir.</p>" +
		'<p><a href="https://www.google.com/maps/dir//Türkiye+Ýþ+Bankasý+Harran+Üniversitesi%2FÞanlýurfa+Þubesi,+Gülveren+Mahallesi+Osmanbey+Kampüs+Yolu+Sokak+NO:59%2F1,+63290+Haliliye%2FÞanlýurfa/@37.1663895,38.9951798,19z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15345d82454faaa9:0xd2191c3040914170!2m2!1d38.994815!2d37.166137">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker26);
  });

  // Otobüs Duraðý
  google.maps.event.addListener(marker27,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">Otob&#252;s Dura&#287;&#305;</h1>' +
		'<div id="bodyContent">' +
		"<img src='https://www.urfaflash.com/files/uploads/news/small/kampuse-2-bin-kisilik-modern-durak1ca7f8091b8df35a3bbe.png' width='600' height='250'>" +
		"<p>2000 Ki&#351;ilik modern turnikeli otob&#252;s dura&#287;&#305;, &#246;&#287;rencilerin beklemeden " +
		"periyodik bir &#351;ekilde &#351;ehir merkezine ula&#351;&#305;mlar&#305;n&#305; sa&#287;lamaktad&#305;r. </p>" +
		'<p><a href="https://www.google.com/maps/dir//37.1655077,38.9960258/@37.166196,38.9943816,18z">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker27);
  });

  // Ýnþaat Mühendisliði
  google.maps.event.addListener(marker28,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">&#304;n&#351;aat M&#252;hendisli&#287;i</h1>' +
		'<div id="bodyContent">' +
		"<img src='https://fastly.4sqi.net/img/general/600x600/500164107_lMLlkMobrTSLVQAg4jMkMxpPHXe3NeNlhAG3WNi0kuA.jpg' width='600' height='300'>" +
		"<p>Harran &#220;niversitesi &#304;n&#351;aat M&#252;hendisli&#287;i B&#246;l&#252;m&#252; Yap&#305;, Hidrolik, Mekanik, Geoteknik ve Ula&#351;&#305;m olmak &#252;zere " +
		"toplam 5 Anabilim Dal&#305;ndan olu&#351;maktad&#305;r. B&#246;l&#252;m&#252;m&#252;zde lisans e&#287;itiminin yan&#305; s&#305;ra, y&#252;ksek lisans ve doktora " +
		"e&#287;itimi de verilmektedir. 4 y&#305;ll&#305;k lisans program&#305;n&#305;n ilk iki y&#305;l&#305;nda, &#246;&#287;renciye temel m&#252;hendislik bilgisi verecek " +
		"matematik ve mekanik dersleri yer almaktad&#305;r. Sahip oldu&#287;umuz M&#220;DEK akreditasyonu ile &#246;&#287;rencilerimizin " +
		"diplomalar&#305; Avrupa, Amerika ve ingilizce konu&#351;ulan &#252;lkelerde ge&#231;erlidir. B&#246;l&#252;m&#252;m&#252;z &#252;lkemizde bu " +
		"akreditasyona sahip olan say&#305;l&#305; b&#246;l&#252;mlerden olup b&#246;lgede M&#220;DEK akreditasyonuna sahip olan tek b&#246;l&#252;md&#252;r. </p>" +
		'<p><a href="http://web.harran.edu.tr/insaat/tr/">' +
		"<b>Web Sitesi</b></a> </p>" +
		'<p><a href="https://www.google.com/maps/dir//37.1724171,39.0022045/@37.1723915,39.0020643,20z">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker28);
  });

  // Çevre Mühendisliði
  google.maps.event.addListener(marker29,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">&#199;evre M&#252;hendisli&#287;i</h1>' +
		'<div id="bodyContent">' +
		"<img src='http://harran.edu.tr//cms/Upload/250x250/a1e138dd-4124-43db-bbea-17d6e5968255.jpg' width='600' height='300'>" +
		"<p>G&#252;neydo&#287;u Anadolu Projesinin i&#351;lerlik kazanmas&#305;yla birlikte y&#246;rede &#231;evresel anlamda &#246;nemli de&#287;i&#351;ikliklerin " +
		"ve olumsuzluklar&#305;n meydana gelmesi beklenmektedir. B&#246;lge ve sahip oldu&#287;u kaynaklar bu a&#231;&#305;dan &#246;nemli bir " +
		"inceleme-ara&#351;t&#305;rma konusu olu&#351;turmaktad&#305;r. " +
		"Dolay&#305;s&#305;yla, Harran &#220;niversitesinin kuruldu&#287;u y&#305;l olan 1993 y&#305;l&#305;nda faaliyetine ba&#351;layan &#199;evre M&#252;hendisli&#287;i" +
		"B&#246;l&#252;m&#252; &#231;evresel problemlerin &#231;&#246;z&#252;m&#252;ne y&#246;nelik olarak b&#252;y&#252;k bir sorumluluk &#252;stlenmi&#351;tir. " +
		"B&#246;l&#252;me ilk &#246;&#287;renciler 1993-1994 e&#287;itim-&#246;&#287;retim y&#305;l&#305;nda al&#305;nm&#305;&#351;t&#305;r. " +
		"&#350;u anda 273 (lisans+lisans&#252;st&#252;) &#246;&#287;renci &#246;&#287;renime devam etmektedir. Her y&#305;l ortalama 30 adet &#246;&#287;renci " +
		"mevcuda eklenmektedir. Program&#305;n e&#287;itim-&#246;&#287;retim dili T&#252;rk&#231;e'dir. " +
		"&#214;&#287;renciler d&#246;rt y&#305;ll&#305;k e&#287;itimin ard&#305;ndan lisans derecesi almaya hak kazan&#305;rlar. " +
		"Osmanbey Yerle&#351;kesinde yer alan b&#246;l&#252;m&#252;m&#252;zde, halen 3 Profes&#246;r, 5 Do&#231;ent, 2 Dr. &#214;&#287;r. &#220;yesi ve 3 " +
		"Ara&#351;t&#305;rma G&#246;revlisi bulunmaktad&#305;r. </p>" +
		'<p><a href="http://web.harran.edu.tr/cevre">' +
		"<b>Web Sitesi</b></a> </p>" +
		'<p><a href="https://www.google.com/maps/dir//37.1723787,39.0025572/@37.1723787,39.0022011,20z">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker29);
  });

  // Lojmanlar
  google.maps.event.addListener(marker30,'click', () => {
	if(infoWindow) {
		infoWindow.close();
	}
	infoWindow = new google.maps.InfoWindow({
		content:
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">Lojmanlar</h1>' +
		'<div id="bodyContent">' +
		"<img src='https://lojman.harran.edu.tr/fronttempfiles/img/portfolio/4.jpg' width='600' height='300'>" +
		'<p><a href="https://lojman.harran.edu.tr/">' +
		"<b>Web Sitesi</b></a> </p>" +
		'<p><a href="https://www.google.com/maps/dir//37.1728653,38.9941532/@37.1730874,38.9953426,17z">' +
		"<b>Yol Tarifi</b></a> </p>" +
		"</div>" +
		"</div>",
	});
	infoWindow.open(map,marker30);
  });


  // Sinir Koordinatlari
  const HarranDelimiter = [
	{lat: 37.1650986, lng: 38.9956392 },
	{lat: 37.1649618, lng: 38.9961971 },
	{lat: 37.1650559, lng: 38.9983214 },
	{lat: 37.1652696, lng: 39.0005316 },
	{lat: 37.1654919, lng: 39.0016581 },
	{lat: 37.1659023, lng: 39.0022696 },
	{lat: 37.1665435, lng: 39.0025379 },
	{lat: 37.1673728, lng: 39.0026666 },
	{lat: 37.1683389, lng: 39.0031816 },
	{lat: 37.1688519, lng: 39.0035786 },
	{lat: 37.1696042, lng: 39.0043832 },
	{lat: 37.1703480, lng: 39.0053488 },
	{lat: 37.1707755, lng: 39.0059496 },
	{lat: 37.1718356, lng: 39.0082885 },
	{lat: 37.1723784, lng: 39.0094794 },
	{lat: 37.1730367, lng: 39.0108527 },
	{lat: 37.1734599, lng: 39.0115072 },
	{lat: 37.1748704, lng: 39.0114213 },
	{lat: 37.1761014, lng: 39.0112390 },
	{lat: 37.1774606, lng: 39.0110888 },
	{lat: 37.1783539, lng: 39.0080739 },
	{lat: 37.1792045, lng: 39.0043618 },
	{lat: 37.1784565, lng: 39.0026988 },
	{lat: 37.1783881, lng: 38.9996304 },
	{lat: 37.1777342, lng: 38.9960577 },
	{lat: 37.1780675, lng: 38.9939655 },
	{lat: 37.1783240, lng: 38.9926781 },
	{lat: 37.1782983, lng: 38.9921524 },
	{lat: 37.1777513, lng: 38.9902212 },
	{lat: 37.1772725, lng: 38.9893950 },
	{lat: 37.1763151, lng: 38.9891697 },
	{lat: 37.1727247, lng: 38.9885904 },
	{lat: 37.1716731, lng: 38.9887299 },
	{lat: 37.1695529, lng: 38.9876570 },
	{lat: 37.1689374, lng: 38.9885367 },
	{lat: 37.1686638, lng: 38.9889717 },
	{lat: 37.1679115, lng: 38.9901675 },
	{lat: 37.1669881, lng: 38.9916803 },
	{lat: 37.1654235, lng: 38.9943625 },
	{lat: 37.1650644, lng: 38.9951350 },
	{lat: 37.1650986, lng: 38.9956392 },
];

	// Sinir Poligonu
	const HarranPolygon = new google.maps.Polygon({
		paths: HarranDelimiter,
		strokeColor: 'purple',
		strokeOpacity: 0.8,
		strokeWeight: 3,
		fillColor: 'pink',
		fillOpacity: 0.05,
  });
  HarranPolygon.setMap(map);
}

function setMapOnAll(map) {
	for(let i = 0; i< restaurants.length; i++) {
		restaurants[i].setMap(map);
	}
	for(let i = 0; i< educations.length; i++) {
		educations[i].setMap(map);
	}
	for(let i = 0; i< coffees.length; i++) {
		coffees[i].setMap(map);
	}
	for(let i = 0; i< residentials.length; i++) {
		residentials[i].setMap(map);
	}
	for(let i = 0; i< bus_stops.length; i++) {
		bus_stops[i].setMap(map);
	}
	for(let i = 0; i< libraries.length; i++) {
		libraries[i].setMap(map);
	}
	for(let i = 0; i< buildings.length; i++) {
		buildings[i].setMap(map);
	}
	for(let i = 0; i< banks.length; i++) {
		banks[i].setMap(map);
	}
	for(let i = 0; i< hospitals.length; i++) {
		hospitals[i].setMap(map);
	}
	for(let i = 0; i< markets.length; i++) {
		markets[i].setMap(map);
	}
}

function clearMarkers() {
	setMapOnAll(null);
}

function showMarkers() {
	setMapOnAll(map);
}

function showBolumler() {
	clearMarkers();
	for(let i = 0; i< educations.length; i++) {
		educations[i].setMap(map);
	}
}

function showBinalar() {
	clearMarkers();
	for(let i = 0; i< buildings.length; i++) {
		buildings[i].setMap(map);
	}
}

function showKutuphaneler() {
	clearMarkers();
	for(let i = 0; i< libraries.length; i++) {
		libraries[i].setMap(map);
	}
}

function showMarketler() {
	clearMarkers();
	for(let i = 0; i< markets.length; i++) {
		markets[i].setMap(map);
	}
}

function showOtobus() {
	clearMarkers();
	for(let i = 0; i< bus_stops.length; i++) {
		bus_stops[i].setMap(map);
	}
}

function showATM() {
	clearMarkers();
	for(let i = 0; i< banks.length; i++) {
		banks[i].setMap(map);
	}
}

function showRestoran() {
	clearMarkers();
	for(let i = 0; i< restaurants.length; i++) {
		restaurants[i].setMap(map);
	}
}

function showCafe() {
	clearMarkers();
	for(let i = 0; i< coffees.length; i++) {
		coffees[i].setMap(map);
	}
}

function showHastane() {
	clearMarkers();
	for(let i = 0; i< hospitals.length; i++) {
		hospitals[i].setMap(map);
	}
}

function showYerlesim() {
	clearMarkers();
	for(let i = 0; i< residentials.length; i++) {
		residentials[i].setMap(map);
	}
}