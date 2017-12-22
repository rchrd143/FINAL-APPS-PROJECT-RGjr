// <video width="320" height="240" controls>
//   <source src="movie.mp4" type="video/mp4">
//   <source src="movie.ogg" type="video/ogg">
//   Your browser does not support the video tag.
// </video>

let process = {
	menu:function(){
		
		let content = <div>
		    <h1 align='center'> Planetarium</h1>
		    <div align='center'>
						<img src='img/MILKY-WAY.jpg' width='100px' height='50px' />
			<audio id="audio_bomb">
				<source src="audio/bomb.mp3" type="audio/mp3" />
			</audio>
			<div>
			<p class="buttons-row">
				<a href='#' class=" button button-fill color-yellow"  onClick={process.page1}>SUN</a>
				<a href='#' class=" button button-fill color-yellow"  onClick={process.page2}>MERCURY</a>
				<a href='#' class=" button button-fill color-yellow" onClick={process.page3}>VENUS</a>
				<a href='#' class=" button button-fill color-yellow" onClick={process.page10}>EARTH</a>
				<a href='#' class=" button button-fill color-yellow" onClick={process.page11}>MARS</a>
				
			</p>
			<p class="buttons-row">
				<a href='#' class=" button button-fill color-yellow" onClick={process.page6}>JUPITER</a>
				<a href='#' class=" button button-fill color-yellow" onClick={process.page4}>SATURN</a>
				<a href='#' class=" button button-fill color-yellow" onClick={process.page7}>URANUS</a>
				<a href='#' class=" button button-fill color-yellow" onClick={process.page8}>NEPTUNE</a>
				<a href='#' class=" button button-fill color-yellow" onClick={process.page9}>PLUTO</a>
				</p>
				<p class="buttons-row">
				<a href='#' class=" button button-fill color-yellow" onClick={process.page12}>MILKY-WAY</a>
				</p>
				</div>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div>
				<h2 align='center' >SUN</h2>
				<p class="buttons-row" width="80px" height="50px">
				<a href='#'  class="button button-fill color-blue"  onClick={process.menu}>BACK</a>
				</p>
				<div align='center'>
						<img src='img/'SUN.jpg width='100px' height='50px' />

				<p align='center'>
					The Sun is the Solar System's star and by far its most massive component.</div>
					 <div>Its large mass (332,900 Earth masses) produces temperatures and densities </div>
					  <div>in its core high enough to sustain nuclear fusion of hydrogen into helium,</div>
					  <div>making it a main-sequence star.[49] This releases an enormous amount of energy,</div>
					  <div>mostly radiated into space as electromagnetic radiation peaking in visible light.</div>
					 <div>The Sun is a G2-type main-sequence star.</div>
					  <div>Hotter main-sequence stars are more luminous.</div>
					   <div>The Sun's temperature is intermediate between that of the hottest stars</div>
					    <div>and that of the coolest stars. Stars brighter and hotter than the Sun are rare,</div>
					    <div> whereas substantially dimmer and cooler stars,</div>
					      <div>known as red dwarfs, make up 85% of the stars in the Milky Way.</div>
					</p>
				</div>

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page2:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>MERCURY</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
				<div align='center'>
						<img src='img/MERCURY.jpg' width='100px' height='50px' />
					<p align='center'>
						<div>Mercury (0.4 AU from the Sun) is the closest planet to the Sun and the smallest</div>
						 <div>planet in the Solar System (0.055 Earth masses). Mercury has no natural satellites;</div>
						 <div> besides impact craters, its only known geological features are lobed ridges or rupes</div>
						   <div>that were probably produced by a period of contraction early in its history. Mercury's</div></div>
						    <div>very tenuous atmosphere consists of atoms blasted off its surface by the solar wind.</div>
						   <div> Its relatively large iron core and thin mantle have not yet been adequately explained</div>
						    <div> Hypotheses include that its outer layers were stripped off by a giant impact; or, </div>
						    <div>that it was prevented from fully accreting by the young Sun's energy </div>
					</p>
				</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page3:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>VENUS</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue"onClick={process.menu}>BACK</a>
				</p>
				<div align='center'>
						<img src='img/VENUS.jpg' width='100px' height='50px' />

					<p align='center'>
						<div>is close in size to Earth (0.815 Earth masses) and, like Earth,</div>
						 <div>has a thick silicate mantle around an iron core, a substantial atmosphere,</div>
						  <div>and evidence of internal geological activity. It is much drier than Earth,</div>
						   <div>and its atmosphere is ninety times as dense. Venus has no natural satellites.</div>
						    <div>It is the hottest planet, with surface temperatures over 400 °C (752 °F),</div>
						     <div>most likely due to the amount of greenhouse gases in the atmosphere.</div>
						     <div> No definitive evidence of current geological activity has been detected on Venus,</div>
						      <div> but it has no magnetic field that would prevent depletion of its substantial atmosphere,</div>
						       <div> which suggests that its atmosphere is being replenished by volcanic eruptions</div>
					</p>
				</div>

			</div>;

			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page4:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>EARTH</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/4.jpg' width='100px' height='50px' />
					<p align='center'>
						<div>is the largest and densest of the inner planets,</div>
						<div> the only one known to have current geological activity,</div>
						 <div>and the only place where life is known to exist.</div>
						  <div>Its liquid hydrosphere is unique among the terrestrial planets,</div>
						   <div>and it is the only planet where plate tectonics has been observed.</div>
						   <div> Earth's atmosphere is radically different from those of the other planets,</div>
						     <div>having been altered by the presence of life to contain 21% free oxygen.</div>
						     <div>It has one natural satellite, the Moon, the only large satellite of</div>
						      <div>a terrestrial planet in the Solar System.	</div>
					</p>	
					</div>

				</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

page6:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>MARS</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/MARS.jpg' width='100px'  height='50px' />
					<p align='center'>
						 <div>is smaller than Earth and Venus (0.107 Earth masses).
						 <div> It has an atmosphere of mostly carbon dioxide with a surface pressure of 6.1 millibars</div>
						 <div> (roughly 0.6% of that of Earth). Its surface, peppered with vast volcanoes,</div>
						    <div>such as Olympus Mons, and rift valleys, such as Valles Marineris, shows geological </div>
						  <div>  activity that may have persisted until as recently as 2 million years ago.</div>
						    <div>Its red colour comes from iron oxide (rust) in its soil. Mars has two tiny natural </div>
						   <div> satellites (Deimos and Phobos) thought to be captured asteroids</div>
					</p>
			</div>

				</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page7:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>JUPITER</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/JUPITER.jpg' width='100px' height='50px' />
					<p align='center'>
					  <div>at 318 Earth masses, is 2.5 times the mass of all the other planets put together.</div>
					   <div>It is composed largely of hydrogen and helium. Jupiter's strong internal heat </div>
					   <div>creates semi-permanent features in its atmosphere, such as cloud bands and the Great Red Spot</div>
					  <div>Jupiter has 69 known satellites. The four largest, Ganymede, Callisto, Io, and Europa,</div>
					   <div>show similarities to the terrestrial planets, such as volcanism and internal heating.</div>
					    <div>Ganymede, the largest satellite in the Solar System, is larger than Mercury.</div>
					</p>

				</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
page8:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>SATURN</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/SATURN.jpg' width='100px' height='50px' />
					<p align='center'>
						<div>distinguished by its extensive ring system, has several similarities to Jupiter,</div>
						 <div>such as its atmospheric composition and magnetosphere. Although Saturn has 60% </div>
						 <div>of Jupiter's volume, it is less than a third as massive, at 95 Earth masses.</div>
						  <div>Saturn is the only planet of the Solar System that is less dense than water.</div>
						   <div>The rings of Saturn are made up of small ice and rock particles. Saturns haS</div>
						    <div>62 confirmed satellites composed largely of ice. Two of these, Titan and Enceladus,</div>
						    <div> show signs of geological activity.[91] Titan, the second-largest moon in the Solar System,</div>
						     <div>is larger than Mercury and the only satellite in the Solar System with a substantial atmosphere.</div>
					</p>

				</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page9:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>URANUS</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/URANUS.jpg' width='100px' height='50px' />
							<p align='center'>
							 <div>Earth masses, is the lightest of the outer planets.</div>
							  <div>Uniquely among the planets, it orbits the Sun on its side; </div>
							  <div>its axial tilt is over ninety degrees to the ecliptic. </div>
							  <div>It has a much colder core than the other giant planets and radiates</div>
							  <div>very little heat into space.[92] Uranus has 27 known satellites,</div>
							   <div>the largest ones being Titania, Oberon, Umbriel, Ariel, and Miranda.</div>
							</p>


</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

page10:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>NEPTUNE</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/NEPTUNE.jpg' width='100px' height='50px' />
						<p align='center'>
						 <div>slightly smaller than Uranus, is more massive (equivalent to 17 Earths) and hence more dense</div>
						 <div>It radiates more internal heat, but not as much as Jupiter or Saturn.[93] Neptune has 14 known satellites.</div>
						  <div>The largest, Triton, is geologically active, with geysers of liquid nitrogen.</div>
						   <div>Triton is the only large satellite with a retrograde orbit.</div>
						    <div>Neptune is accompanied in its orbit by several minor planets,</div>
						    <div> termed Neptune trojans, that are in 1:1 resonance with it.</div>
						</p>


</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page11:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>PLUTO</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/PLUTO.jpg' width='100px' height='50px' />
						<p align='center'>
						<div>is a dwarf planet in the Kuiper belt, a ring of bodies beyond Neptune.</div>
						 <div>It was the first Kuiper belt object to be discovered.</div>
						<div>Pluto was discovered by Clyde Tombaugh in 1930 and was originally considered</div>
						 <div>to be the ninth planet from the Sun. After 1992, its status as a planet was</div>
						 <div> questioned following the discovery of several objects of similar size in the Kuiper belt.</div>
						   <div>In 2005, Eris, a dwarf planet in the scattered disc which is 27% more massive than Pluto</div>
						   <div>, was discovered. This led the International Astronomical Union (IAU) to define</div>
						   <div> the term "planet" formally in 2006, during their 26th General Assembly.</div>
						    <div> That definition excluded Pluto and reclassified it as a dwarf planet.</div>
							<div>Pluto is the largest and second-most-massive known dwarf planet in the Solar System,</div>
							 <div>and the ninth-largest and tenth-most-massive known object directly orbiting the Sun<div>
						</p>

</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page12:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>MILKY-WAY</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
				<div align='center'>
						<img src='img/MILKY-WAY.jpg' width='100px' height='50px' />
					<p align='center'>
						 <div>that contains our Solar System.[24] The descriptive "milky" is derived<div>
						  <div>from the appearance from Earth of the galaxy – a band of light seen in<div>
						   <div>the night sky formed from stars that cannot be individually distinguished <div>
						   <div>by the naked eye. The term Milky Way is a translation of the Latin via lactea,<div>
						    <div>from the Greek γαλαξίας κύκλος (galaxías kýklos, "milky circle").<div>
						    <div>From Earth, the Milky Way appears as a band because its disk-shaped structure <div>
						     <div>is viewed from within. Galileo Galilei first resolved the band of light into<div>
						      <div>individual stars with his telescope in 1610. Until the early 1920s, most astronomers<div>
						       <div>thought that the Milky Way contained all the stars in the Universe<div>
						</p>

</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},



	loading:function(){
		let content = <div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					
					<audio id="audio">
						<source src="audio/bomb.mp3" type="audio/mp3" />
					</audio>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio').play();
		process.replayAudio('audio');
	},
	audio:function(audio){
		let _audio = document.getElementById(audio);
		return _audio;
	},
	replayAudio:function(audio){
		process.audio(audio).addEventListener('ended',function(){
			process.audio('audio').pause();
			process.audio(audio).play();
		})
	}
}

let counting = 0;
process.loading();
setTimeout(function(){
	process.audio('audio').pause();
	process.menu();
},5000);