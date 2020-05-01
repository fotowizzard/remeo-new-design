<!DOCTYPE php>
<html>
<head>
	<title>AVT Dev</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, viewport-fit=cover" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black" />
	<meta name="mobile-web-app-capable" content="yes" />
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
	<meta http-equiv="x-ua-compatible" content="IE=edge" />
	<style>
		html { height:100%; }
		body { height:100%; overflow:hidden; margin:0; padding:0; font-family: Lato, Helvetica, sans-serif; font-size:16px; color:#FFFFFF; background-color:#212426; }
	</style>

	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">

	<link rel="stylesheet" href="css/tour.css" >

	<script type="text/javascript" src="js/common.js?t=<?php echo time(); ?>"></script>
	<script type="text/javascript" src="js/app.js?t=<?php echo time(); ?>"></script>
	<script type="text/javascript" src="js/source-merge.js?t=<?php echo time(); ?>"></script>
	<script type="text/javascript" src="js/xml2json.min.js?t=<?php echo time(); ?>"></script>
	<script type="text/javascript" src="js/vkbeautify.js?t=<?php echo time(); ?>"></script>

	<script type="text/javascript" src="sources.js?t=<?php echo time(); ?>"></script>
</head>
<body>

<script src="../app/tour.js"></script>

<div id="pano" style="width:100%;height:100%;">
	<noscript><table style="width:100%;height:100%;"><tr style="vertical-align:middle;"><td><div style="text-align:center;">ERROR:<br/><br/>Javascript not activated<br/><br/></div></td></tr></table></noscript>
	<script>

		async function buildTour() {

			// сборка файлов
			await mergeKRPanoSources(sourceFiles, '../app/kml/app.xml');
			await mergeFiles(jsSources, '../app/js/js.js');
			await mergeFiles(cssSources, '../app/css/css.css');

			// получение ссылки на файл тура
			const documentURL = new URL(window.location);
			const tourTitle = documentURL.searchParams.get("tour");
			
			let timestamp = +new Date;

			embedpano({
				xml:`../${tourTitle}/index.xml?t=` + timestamp, 
				target:"pano", 
				html5:"only", 
				bgcolor: "#222222",
				initvars:{
					_timestamp: '?t=' + timestamp,
				}, 
				passQueryParameters:true
			});
		}

		buildTour();
		
	</script>
</div>

</body>
</html>
