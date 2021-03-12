google.charts.load('current', {'packages':['corechart', 'geochart']});
google.charts.setOnLoadCallback(drawAllSheets);

function drawAllSheets() {
    drawSheetName('military', 'SELECT B,C,D,E,F,G,H', militarySpending);
} //drawAllSheets

function drawSheetName(sheetName, query, responseHandler){
    var queryString = encodeURIComponent(query);
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/14NNxsz_D33wYcB0xRYZnx5GH9xkSqXCn5BzNI_7KRbI/gviz/tq?sheet='
        + sheetName + '&headers=1&tq=' + queryString
    );

    query.send(responseHandler);
} //drawSheetName

function militarySpending(response) {
    var data = response.getDataTable();
    data.sort({column: 6, desc: true});

    var options = {
        vAxis: {title: 'Spending in ($USD)'},
        hAxis: {title: 'Country', slantedText: true, slantedTextAngle: 45},
        title: 'Top 11 Countries by Military Spending 2013 - 2018 ($USD)',
        width: 1150,
        height: 600,
        bar: {groupWidth: "75%"},
        colors: ['#50514f', '#f25f5c', '#ffe066', '#247ba0', '#70c1b3', '#772e25']
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('military_spending'));
    chart.draw(data, options);
} //military spending

function militarySpendingPerCapita(){

    percapita = [{year: "2013", saudi: 2230.095994, us: 2230.095994, aus: 1073.379632, uk: 886.6878356, france: 787.9166209, russia: 615.6696157, germany: 556.3315245, japan: 384.6673656, brazil: 163.5269459, china: 132.5200018, india: 37.00954215},
              {year: "2014", saudi: 2612.233259, us: 2035.145927, aus: 1098.315453, uk: 916.1107327, france: 801.2832853, russia: 588.9076717, germany: 545.9952155, japan: 368.5177615, brazil: 161.0722659, china: 147.1644176, india: 39.29757013},
              {year: "2015", saudi: 2748.810834, us: 1976.79504, aus: 1009.666229, uk: 827.1700403, france: 685.9302318, russia: 460.9283104, germany: 453.1963408, japan: 331.1764364, brazil: 120.3965799, china: 156.4088914, india: 39.15230292},
              {year: "2016", saudi: 1962.631076, us: 1981.338337, aus: 1090.614215, uk: 733.3908737, france: 709.9471812, russia: 479.7295277, germany: 482.39889, japan: 365.931467, brazil: 117.5028501, china: 156.9663406, india: 42.76120242},
              {year: "2017", saudi: 2126.94303, us: 1990.097781, aus: 1125.569872, uk: 702.9080445, france: 735.7529223, russia: 460.4069545, germany: 512.5491189, japan: 357.9819891, brazil: 140.8964564, china: 164.7914195, india: 48.22695193},
              {year: "2018", saudi: 2207.718606, us: 2089.124922, aus: 1074.336793, uk: 750.7053753, france: 767.7012274, russia: 424.8924159, germany: 561.0172401, japan: 368.4366273, brazil: 134.5180532, china: 182.0108707, india: 48.98488312}];

    selectedYear = document.getElementById("dropdown").value;

    for (i=0; i<percapita.length; i++){
        if (selectedYear == percapita[i].year){
            saudi1 = percapita[i].saudi;
            us1 = percapita[i].us;
            aus1 = percapita[i].aus;
            uk1 = percapita[i].uk;
            france1 = percapita[i].france;
            russia1 = percapita[i].russia;
            germany1 = percapita[i].germany;
            japan1 = percapita[i].japan;
            brazil1 = percapita[i].brazil;
            china1 = percapita[i].china;
            india1 = percapita[i].india;
        }
    }

    var data = google.visualization.arrayToDataTable([
        ['Country', 'Per Capita'],
        ['Saudi Arabia', saudi1],
        ['USA', us1],
        ['Australia', aus1],
        ['United Kingdom', uk1],
        ['France', france1],
        ['Russia', russia1],
        ['Germany', germany1],
        ['Japan', japan1],
        ['Brazil', brazil1],
        ['China', china1],
        ['India', india1]
    ]);

    var options = {
        title: 'Military Expenditure Per Capita',
        width: 1150,
        height: 600,
        colors: ['#84a98c'],
        vAxis: {title: 'Country'},
        hAxis: {title: 'Spending Per Person ($USD)'}
    };

    var chart = new google.visualization.BarChart(document.getElementById("mil_per_cap_drop"));
    chart.draw(data, options);
} //military spending per capita dropdown menu