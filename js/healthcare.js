google.charts.load('current', {'packages':['corechart', 'geochart', 'line']});
google.charts.setOnLoadCallback(drawAllSheets);

function drawAllSheets() {
    drawSheetName('healthcare', 'SELECT B,C,D,E,F,G,H', healthcareSpending);
    drawSheetName('mil-vs-edu-health', 'SELECT B,C,U', healthVsMil2013);
    drawSheetName('mil-vs-edu-health', 'SELECT B,D,V', healthVsMil2014);
    drawSheetName('mil-vs-edu-health', 'SELECT B,E,W', healthVsMil2015);
    drawSheetName('mil-vs-edu-health', 'SELECT B,F,X', healthVsMil2016);
    drawSheetName('mil-vs-edu-health', 'SELECT B,G,Y', healthVsMil2017);
    drawSheetName('mil-vs-edu-health', 'SELECT B,H,Z', healthVsMil2018);
} //drawAllSheets

function drawSheetName(sheetName, query, responseHandler){
    var queryString = encodeURIComponent(query);
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/14NNxsz_D33wYcB0xRYZnx5GH9xkSqXCn5BzNI_7KRbI/gviz/tq?sheet='
        + sheetName + '&headers=1&tq=' + queryString
    );

    query.send(responseHandler);
} //drawSheetName

function healthcareSpending(response) {
    var data = response.getDataTable();
    data.sort({column: 6, desc: true});

    var options = {
        vAxis: {title: 'Spending in ($USD)'},
        hAxis: {title: 'Country', slantedText: true, slantedTextAngle: 45},
        title: 'Top 11 Countries by Healthcare Spending 2013 - 2018 ($USD)',
        width: 1150,
        height: 600,
        bar: {groupWidth: "75%"},
        colors: ['#50514f', '#f25f5c', '#ffe066', '#247ba0', '#70c1b3', '#772e25']
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('healthcare_spending'));
    chart.draw(data, options);
} //healthcareSpending

function healthVsMil2013(response) {
    var data = response.getDataTable();

    var options = {
        title: 'Healthcare Vs. Military in 2013',
        width: 550,
        height: 400,
        vAxis: {title: 'Spending in Billions ($USD)'},
        hAxis: {title: 'Country'},
        colors: ['#006d77', '#83c5be']
    };

    var chart = new google.visualization.AreaChart(document.getElementById('health_vs_mil_2013'));
    chart.draw(data, options);
} //healthVsMil2013

function healthVsMil2014(response) {
    var data = response.getDataTable();

    var options = {
        title: 'Healthcare Vs. Military in 2014',
        width: 550,
        height: 400,
        vAxis: {title: 'Spending in Billions ($USD)'},
        hAxis: {title: 'Country'},
        colors: ['#006d77', '#83c5be']
    };

    var chart = new google.visualization.AreaChart(document.getElementById('health_vs_mil_2014'));
    chart.draw(data, options);
} //healthVsMil2014

function healthVsMil2015(response) {
    var data = response.getDataTable();

    var options = {
        title: 'Healthcare Vs. Military in 2015',
        width: 550,
        height: 400,
        vAxis: {title: 'Spending in Billions ($USD)'},
        hAxis: {title: 'Country'},
        colors: ['#006d77', '#83c5be']
    };

    var chart = new google.visualization.AreaChart(document.getElementById('health_vs_mil_2015'));
    chart.draw(data, options);
} //healthVsMil2015

function healthVsMil2016(response) {
    var data = response.getDataTable();

    var options = {
        title: 'Healthcare Vs. Military in 2016',
        width: 550,
        height: 400,
        vAxis: {title: 'Spending in Billions ($USD)'},
        hAxis: {title: 'Country'},
        colors: ['#006d77', '#83c5be']
    };

    var chart = new google.visualization.AreaChart(document.getElementById('health_vs_mil_2016'));
    chart.draw(data, options);
} //healthVsMil2016

function healthVsMil2017(response) {
    var data = response.getDataTable();

    var options = {
        title: 'Healthcare Vs. Military in 2017',
        width: 550,
        height: 400,
        vAxis: {title: 'Spending in Billions ($USD)'},
        hAxis: {title: 'Country'},
        colors: ['#006d77', '#83c5be']
    };

    var chart = new google.visualization.AreaChart(document.getElementById('health_vs_mil_2017'));
    chart.draw(data, options);
} //healthVsMil2017

function healthVsMil2018(response) {
    var data = response.getDataTable();

    var options = {
        title: 'Healthcare Vs. Military in 2018',
        width: 550,
        height: 400,
        vAxis: {title: 'Spending in Billions ($USD)'},
        hAxis: {title: 'Country'},
        colors: ['#006d77', '#83c5be']
    };

    var chart = new google.visualization.AreaChart(document.getElementById('health_vs_mil_2018'));
    chart.draw(data, options);
} //healthVsMil2018