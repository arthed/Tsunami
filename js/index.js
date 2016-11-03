function display()
{
	//machine à écrire
	if (cpt >= txt.length) return;
	cpt++;
	var elt=document.getElementById("txt");
	var car = (txt.charCodeAt(cpt)==10) ? '<br />' : txt.substr(cpt,1);
	
	elt.innerHTML=elt.innerHTML+car;	
	
	setTimeout("display()",80+Math.round(Math.random()*20));	
}

//récupération du nom
		function $_GET(param) {
			var vars = {};
			window.location.href.replace( location.hash, '' ).replace( 
				/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
				function( m, key, value ) { // callback
					vars[key] = value !== undefined ? value : '';
				}
			);

			if ( param ) {
				return vars[param] ? vars[param] : null;	
			}
			return vars;
		}

		var name = $_GET('name');