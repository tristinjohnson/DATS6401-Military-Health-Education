google.charts.load('current', {'packages':['corechart', 'geochart']});
google.charts.setOnLoadCallback(drawAllSheets);

function drawAllSheets() {
    drawSheetName('population-percapita', 'SELECT K,AM,L', milPerCapVsGdpPerCap2013);
    drawSheetName('population-percapita', 'SELECT K,AN,M', milPerCapVsGdpPerCap2014);
    drawSheetName('population-percapita', 'SELECT K,AO,N', milPerCapVsGdpPerCap2015);
    drawSheetName('population-percapita', 'SELECT K,AP,O', milPerCapVsGdpPerCap2016);
    drawSheetName('population-percapita', 'SELECT K,AQ,P', milPerCapVsGdpPerCap2017);
    drawSheetName('population-percapita', 'SELECT K,AR,Q', milPerCapVsGdpPerCap2018);
    drawSheetName('population-percapita', 'SELECT K,AM,U', healthPerCapVsGdpPerCap2013);
    drawSheetName('population-percapita', 'SELECT K,AN,V', healthPerCapVsGdpPerCap2014);
    drawSheetName('population-percapita', 'SELECT K,AO,W', healthPerCapVsGdpPerCap2015);
    drawSheetName('population-percapita', 'SELECT K,AP,X', healthPerCapVsGdpPerCap2016);
    drawSheetName('population-percapita', 'SELECT K,AQ,Y', healthPerCapVsGdpPerCap2017);
    drawSheetName('population-percapita', 'SELECT K,AR,Z', healthPerCapVsGdpPerCap2018);
    drawSheetName('population-percapita', 'SELECT K,AM,AD', educationPerCapVsGdpPerCap2013);
    drawSheetName('population-percapita', 'SELECT K,AN,AE', educationPerCapVsGdpPerCap2014);
    drawSheetName('population-percapita', 'SELECT K,AO,AF', educationPerCapVsGdpPerCap2015);
    drawSheetName('population-percapita', 'SELECT K,AP,AG', educationPerCapVsGdpPerCap2016);
    drawSheetName('population-percapita', 'SELECT K,AQ,AG', educationPerCapVsGdpPerCap2017);
    drawSheetName('population-percapita', 'SELECT K,AR,AI', educationPerCapVsGdpPerCap2018);
} //drawAllSheets

function drawSheetName(sheetName, query, responseHandler){
    var queryString = encodeURIComponent(query);
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/14NNxsz_D33wYcB0xRYZnx5GH9xkSqXCn5BzNI_7KRbI/gviz/tq?sheet='
        + sheetName + '&headers=1&tq=' + queryString
    );

    query.send(responseHandler);
} //drawSheetName

function overallSpendingVsGDP(){
    countryData = [{country: "Australia", military: 25.92817626, education: 72.4827987, health: 128.0473862, gdp: 1394.378333},
                {country: "United States", military: 654.9913333, education: 1.03E+03, health: 3.10E+03, gdp: 1.86E+04},
                {country: "China", military: 215.5808333, education: 5.53E+02, health: 5.53E+02, gdp: 1.14E+04},
                {country: "Germany", military: 42.45067936, education: 180.5826588, health: 413.330303, gdp: 3681.128333},
                {country: "Japan", military: 46.08496278, education: 163.5458171, health: 523.5809, gdp: 4856.636667},
                {country: "France", military: 49.79329161, education: 145.6019989, health: 304.9601766, gdp: 2659.293333},
                {country: "United Kingdom", military: 52.39186467, education: 156.0184974, health: 282.1482762, gdp: 2833.265},
                {country: "Saudi Arabia", military: 73.90684444, education: 34.76464356, health: 41.33667712, gdp: 712.8851667},
                {country: "Russia", military: 72.77131473, education: 70.39625065, health: 88.75523968, gdp: 1705.96},
                {country: "India", military: 56.17799475, education: 101.3808904, health: 82.43278651, gdp: 2276.693333},
                {country: "Brazil", military: 28.63955121, education: 127.709038, health: 183.4408269, gdp: 2079.17}];

    selectedCountry = document.getElementById("dropdown1").value;

    for (i=0; i < countryData.length; i++){
        if (selectedCountry == countryData[i].country){
            military1 = countryData[i].military;
            education1 = countryData[i].education;
            health1 = countryData[i].health;
            gdp1 = countryData[i].gdp;
        }
    }

    var data = google.visualization.arrayToDataTable([
        ['Country', 'Military-Avg', 'Education-Avg', 'Health-Avg', 'GDP-Avg'],
        ['Total Average', military1, education1, health1, gdp1]
        //['Total Avg', military1, education1, health1, gdp1]
    ]);

    var options = {
        hAxis: {title: 'Spending in Billions ($USD)'},
        title: 'Military, Education, Healthcare vs. GDP (Average 2013 - 2018)',
        width: 1150,
        height: 600,
        colors: ['#0099cc', '#ccffcc', '#66ccff', '#003399']
    };

    var chart = new google.visualization.BarChart(document.getElementById('gdp_vs_other_by_country'));
    chart.draw(data, options);
} //overallSpendingVsGDP

function milPerCapVsGdpPerCap2013(response){
    var data = response.getDataTable();

    var options = {
        title: 'Military Per Capita vs. GDP Per Capita (2013)',
        width: 1150,
        height: 600,
        vAxis: {title: 'Military Spending Per Capita ($USD)', viewWindow: {min: 0, max: 2500}},
        hAxis: {title: 'GDP Per Capita', viewWindow: {min: 0, max: 75000}},
        bubble: {textStyle: {fontSize: 14, fontName: 'Times-Roman', bold: true,italic: true}},
        colors: ['#e5383b']
    };

    var chart = new google.visualization.BubbleChart(document.getElementById('mil_percap_gdp_percap_2013'));
    chart.draw(data, options);
} //milPerCapVsGdpPerCap2013

function milPerCapVsGdpPerCap2014(response){
    var data = response.getDataTable();

    var options = {
        title: 'Military Per Capita vs. GDP Per Capita (2014)',
        width: 1150,
        height: 600,
        vAxis: {title: 'Military Spending Per Capita ($USD)', viewWindow: {min: 0, max: 3000}},
        hAxis: {title: 'GDP Per Capita', viewWindow: {min: 0, max: 70000}},
        bubble: {textStyle: {fontSize: 14, fontName: 'Times-Roman', bold: true, italic: true}},
        colors: ['#e5383b']
    };

    var chart = new google.visualization.BubbleChart(document.getElementById('mil_percap_gdp_percap_2014'));
    chart.draw(data, options);
} //milPerCapVsGdpPerCap2014

function milPerCapVsGdpPerCap2015(response){
    var data = response.getDataTable();

    var options = {
        title: 'Military Per Capita vs. GDP Per Capita (2015)',
        width: 1150,
        height: 600,
        vAxis: {title: 'Military Spending Per Capita ($USD)', viewWindow: {min: 0, max: 3000}},
        hAxis: {title: 'GDP Per Capita', viewWindow: {min: 0, max: 60000}},
        bubble: {textStyle: {fontSize: 14, fontName: 'Times-Roman', bold: true, italic: true}},
        colors: ['#e5383b']
    };

    var chart = new google.visualization.BubbleChart(document.getElementById('mil_percap_gdp_percap_2015'));
    chart.draw(data, options);
} //milPerCapVsGdpPerCap2015

function milPerCapVsGdpPerCap2016(response){
    var data = response.getDataTable();

    var options = {
        title: 'Military Per Capita vs. GDP Per Capita (2016)',
        width: 1150,
        height: 600,
        vAxis: {title: 'Military Spending Per Capita ($USD)', viewWindow: {min: 0, max: 2500}},
        hAxis: {title: 'GDP Per Capita', viewWindow: {min: 0, max: 62000}},
        bubble: {textStyle: {fontSize: 14, fontName: 'Times-Roman', bold: true, italic: true}},
        colors: ['#e5383b']
    };

    var chart = new google.visualization.BubbleChart(document.getElementById('mil_percap_gdp_percap_2016'));
    chart.draw(data, options);
} //milPerCapVsGdpPerCap2016

function milPerCapVsGdpPerCap2017(response){
    var data = response.getDataTable();

    var options = {
        title: 'Military Per Capita vs. GDP Per Capita (2017)',
        width: 1150,
        height: 600,
        vAxis: {title: 'Military Spending Per Capita ($USD)', viewWindow: {min: 0, max: 2500}},
        hAxis: {title: 'GDP Per Capita', viewWindow: {min: 0, max: 65000}},
        bubble: {textStyle: {fontSize: 14, fontName: 'Times-Roman', bold: true, italic: true}},
        colors: ['#e5383b']
    };

    var chart = new google.visualization.BubbleChart(document.getElementById('mil_percap_gdp_percap_2017'));
    chart.draw(data, options);
} //milPerCapVsGdpPerCap2017

function milPerCapVsGdpPerCap2018(response){
    var data = response.getDataTable();

    var options = {
        title: 'Military Per Capita vs. GDP Per Capita (2018)',
        width: 1150,
        height: 600,
        vAxis: {title: 'Military Spending Per Capita ($USD)', viewWindow: {min: 0, max: 2500}},
        hAxis: {title: 'GDP Per Capita', viewWindow: {min: 0, max: 70000}},
        bubble: {textStyle: {fontSize: 14, fontName: 'Times-Roman', bold: true, italic: true}},
        colors: ['#e5383b']
    };

    var chart = new google.visualization.BubbleChart(document.getElementById('mil_percap_gdp_percap_2018'));
    chart.draw(data, options);
} //milPerCapVsGdpPerCap2018

function healthPerCapVsGdpPerCap2013(response){
    var data = response.getDataTable();

    var options = {
        title: 'Healthcare Per Capita vs. GDP Per Capita (2013)',
        hAxis: {title: 'Country', slantedText: true, slantedTextAngle: 45},
        vAxis: {title: 'Per Capita Value ($USD)'},
        lineWidth: 1,
        width: 550,
        height: 425,
        colors: ['#219ebc', '#d90429']
    };

    var chart = new google.visualization.SteppedAreaChart(document.getElementById('healthPerCap_gdpPerCap_2013'));
    chart.draw(data, options);
} //healthPerCapVsGdpPerCap2013

function healthPerCapVsGdpPerCap2014(response){
    var data = response.getDataTable();

    var options = {
        title: 'Healthcare Per Capita vs. GDP Per Capita (2014)',
        hAxis: {title: 'Country', slantedText: true, slantedTextAngle: 45},
        vAxis: {title: 'Per Capita Value ($USD)'},
        lineWidth: 1,
        width: 550,
        height: 425,
        colors: ['#219ebc', '#d90429']
    };

    var chart = new google.visualization.SteppedAreaChart(document.getElementById('healthPerCap_gdpPerCap_2014'));
    chart.draw(data, options);
} //healthPerCapVsGdpPerCap2014

function healthPerCapVsGdpPerCap2015(response){
    var data = response.getDataTable();

    var options = {
        title: 'Healthcare Per Capita vs. GDP Per Capita (2015)',
        hAxis: {title: 'Country', slantedText: true, slantedTextAngle: 45},
        vAxis: {title: 'Per Capita Value ($USD)'},
        lineWidth: 1,
        width: 550,
        height: 425,
        colors: ['#219ebc', '#d90429']
    };

    var chart = new google.visualization.SteppedAreaChart(document.getElementById('healthPerCap_gdpPerCap_2015'));
    chart.draw(data, options);
} //healthPerCapVsGdpPerCap2015

function healthPerCapVsGdpPerCap2016(response){
    var data = response.getDataTable();

    var options = {
        title: 'Healthcare Per Capita vs. GDP Per Capita (2016)',
        hAxis: {title: 'Country', slantedText: true, slantedTextAngle: 45},
        vAxis: {title: 'Per Capita Value ($USD)'},
        lineWidth: 1,
        width: 550,
        height: 425,
        colors: ['#219ebc', '#d90429']
    };

    var chart = new google.visualization.SteppedAreaChart(document.getElementById('healthPerCap_gdpPerCap_2016'));
    chart.draw(data, options);
} //healthPerCapVsGdpPerCap2016

function healthPerCapVsGdpPerCap2017(response){
    var data = response.getDataTable();

    var options = {
        title: 'Healthcare Per Capita vs. GDP Per Capita (2017)',
        hAxis: {title: 'Country', slantedText: true, slantedTextAngle: 45},
        vAxis: {title: 'Per Capita Value ($USD)'},
        lineWidth: 1,
        width: 550,
        height: 425,
        colors: ['#219ebc', '#d90429']
    };

    var chart = new google.visualization.SteppedAreaChart(document.getElementById('healthPerCap_gdpPerCap_2017'));
    chart.draw(data, options);
} //healthPerCapVsGdpPerCap2017

function healthPerCapVsGdpPerCap2018(response){
    var data = response.getDataTable();

    var options = {
        title: 'Healthcare Per Capita vs. GDP Per Capita (2018)',
        hAxis: {title: 'Country', slantedText: true, slantedTextAngle: 45},
        vAxis: {title: 'Per Capita Value ($USD)'},
        lineWidth: 1,
        width: 550,
        height: 425,
        colors: ['#219ebc', '#d90429']
    };

    var chart = new google.visualization.SteppedAreaChart(document.getElementById('healthPerCap_gdpPerCap_2018'));
    chart.draw(data, options);
} //healthPerCapVsGdpPerCap2018

function educationPerCapVsGdpPerCap2013(response){
    var data = response.getDataTable();

    var options = {
        title: 'Education Per Capita vs. GDP Per Capita (2013)',
        hAxis: {title: 'Country', slantedText: true, slantedTextAngle: 45},
        vAxis: {title: 'Per Capita Value ($USD)'},
        lineWidth: 1,
        width: 550,
        height: 425,
        colors: ['#219ebc', '#606c38']
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('educationPerCap_gdpPerCap_2013'));
    chart.draw(data, options);
} //educationPerCapVsGdpPerCap2013

function educationPerCapVsGdpPerCap2014(response){
    var data = response.getDataTable();

    var options = {
        title: 'Education Per Capita vs. GDP Per Capita (2014)',
        hAxis: {title: 'Country', slantedText: true, slantedTextAngle: 45},
        vAxis: {title: 'Per Capita Value ($USD)'},
        lineWidth: 1,
        width: 550,
        height: 425,
        colors: ['#219ebc', '#606c38']
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('educationPerCap_gdpPerCap_2014'));
    chart.draw(data, options);
} //educationPerCapVsGdpPerCap2014

function educationPerCapVsGdpPerCap2015(response){
    var data = response.getDataTable();

    var options = {
        title: 'Education Per Capita vs. GDP Per Capita (2015)',
        hAxis: {title: 'Country', slantedText: true, slantedTextAngle: 45},
        vAxis: {title: 'Per Capita Value ($USD)'},
        lineWidth: 1,
        width: 550,
        height: 425,
        colors: ['#219ebc', '#606c38']
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('educationPerCap_gdpPerCap_2015'));
    chart.draw(data, options);
} //educationPerCapVsGdpPerCap2015

function educationPerCapVsGdpPerCap2016(response){
    var data = response.getDataTable();

    var options = {
        title: 'Education Per Capita vs. GDP Per Capita (2016)',
        hAxis: {title: 'Country', slantedText: true, slantedTextAngle: 45},
        vAxis: {title: 'Per Capita Value ($USD)'},
        lineWidth: 1,
        width: 550,
        height: 425,
        colors: ['#219ebc', '#606c38']
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('educationPerCap_gdpPerCap_2016'));
    chart.draw(data, options);
} //educationPerCapVsGdpPerCap2016

function educationPerCapVsGdpPerCap2017(response){
    var data = response.getDataTable();

    var options = {
        title: 'Education Per Capita vs. GDP Per Capita (2017)',
        hAxis: {title: 'Country', slantedText: true, slantedTextAngle: 45},
        vAxis: {title: 'Per Capita Value ($USD)'},
        lineWidth: 1,
        width: 550,
        height: 425,
        colors: ['#219ebc', '#606c38']
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('educationPerCap_gdpPerCap_2017'));
    chart.draw(data, options);
} //educationPerCapVsGdpPerCap2017

function educationPerCapVsGdpPerCap2018(response){
    var data = response.getDataTable();

    var options = {
        title: 'Education Per Capita vs. GDP Per Capita (2018)',
        hAxis: {title: 'Country', slantedText: true, slantedTextAngle: 45},
        vAxis: {title: 'Per Capita Value ($USD)'},
        lineWidth: 1,
        width: 550,
        height: 425,
        colors: ['#219ebc', '#606c38']
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('educationPerCap_gdpPerCap_2018'));
    chart.draw(data, options);
} //educationPerCapVsGdpPerCap2018



