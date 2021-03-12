google.charts.load('current', {'packages':['corechart', 'geochart']});
google.charts.setOnLoadCallback(drawAllSheets);

function drawAllSheets() {
    drawSheetName('education', 'SELECT B,C,D,E,F,G,H', educationSpending);
    drawSheetName('mil-vs-edu-health', 'SELECT B,C,L', educationSpendingVMilitary2013);
    drawSheetName('mil-vs-edu-health', 'SELECT B,D,M', educationSpendingVMilitary2014);
    drawSheetName('mil-vs-edu-health', 'SELECT B,E,N', educationSpendingVMilitary2015);
    drawSheetName('mil-vs-edu-health', 'SELECT B,F,O', educationSpendingVMilitary2016);
    drawSheetName('mil-vs-edu-health', 'SELECT B,G,P', educationSpendingVMilitary2017);
    drawSheetName('mil-vs-edu-health', 'SELECT B,H,Q', educationSpendingVMilitary2018);
} //drawAllSheets

function drawSheetName(sheetName, query, responseHandler){
    var queryString = encodeURIComponent(query);
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/14NNxsz_D33wYcB0xRYZnx5GH9xkSqXCn5BzNI_7KRbI/gviz/tq?sheet='
        + sheetName + '&headers=1&tq=' + queryString
    );

    query.send(responseHandler);
} //drawSheetName

function educationSpending(response) {
    var data = response.getDataTable();
    data.sort({column: 6, desc: true});

    var options = {
        vAxis: {title: 'Spending in ($USD)'},
        hAxis: {title: 'Country', slantedText: true, slantedTextAngle: 45},
        title: 'Top 11 Countries by Education Spending 2013 - 2018 ($USD)',
        width: 1150,
        height: 600,
        bar: {groupWidth: "75%"},
        colors: ['#50514f', '#f25f5c', '#ffe066', '#247ba0', '#70c1b3', '#772e25']
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('education_spending'));
    chart.draw(data, options);
} //educationSpending

function educationSpendingVMilitary2013(response) {
    var data = response.getDataTable();
    
    var options = {
        vAxis: {title: 'Country'},
        hAxis: {title: 'Spending in Billions ($USD)', slantedText: true, slantedTextAngle: 45},
        bars: 'horizontal',
        isStacked: true,
        title: 'Education Spending vs. Military Spending (2013)',
        width: 550,
        height: 425,
        colors: ['#3d5a80', '#98c1d9']
    };

    var chart = new google.visualization.BarChart(document.getElementById('edu_vs_mil_2013'));
    chart.draw(data, options);
} //educationSpendingVMilitary2013

function educationSpendingVMilitary2014(response) {
    var data = response.getDataTable();
    
    var options = {
        vAxis: {title: 'Country'},
        hAxis: {title: 'Spending in Billions ($USD)', slantedText: true, slantedTextAngle: 45},
        bars: 'horizontal',
        isStacked: true,
        title: 'Education Spending vs. Military Spending (2014)',
        width: 550,
        height: 425,
        colors: ['#3d5a80', '#98c1d9']
    };

    var chart = new google.visualization.BarChart(document.getElementById('edu_vs_mil_2014'));
    chart.draw(data, options);
} //educationSpendingVMilitary2014

function educationSpendingVMilitary2015(response) {
    var data = response.getDataTable();
    
    var options = {
        vAxis: {title: 'Country'},
        hAxis: {title: 'Spending in Billions ($USD)', slantedText: true, slantedTextAngle: 45},
        bars: 'horizontal',
        isStacked: true,
        title: 'Education Spending vs. Military Spending (2015)',
        width: 550,
        height: 425,
        colors: ['#3d5a80', '#98c1d9']
    };

    var chart = new google.visualization.BarChart(document.getElementById('edu_vs_mil_2015'));
    chart.draw(data, options);
} //educationSpendingVMilitary2015

function educationSpendingVMilitary2016(response) {
    var data = response.getDataTable();
    
    var options = {
        vAxis: {title: 'Country'},
        hAxis: {title: 'Spending in Billions ($USD)', slantedText: true, slantedTextAngle: 45},
        bars: 'horizontal',
        isStacked: true,
        title: 'Education Spending vs. Military Spending (2016)',
        width: 550,
        height: 425,
        colors: ['#3d5a80', '#98c1d9']
    };

    var chart = new google.visualization.BarChart(document.getElementById('edu_vs_mil_2016'));
    chart.draw(data, options);
} //educationSpendingVMilitary2016

function educationSpendingVMilitary2017(response) {
    var data = response.getDataTable();
    
    var options = {
        vAxis: {title: 'Country'},
        hAxis: {title: 'Spending in Billions ($USD)', slantedText: true, slantedTextAngle: 45},
        bars: 'horizontal',
        isStacked: true,
        title: 'Education Spending vs. Military Spending (2017)',
        width: 550,
        height: 425,
        colors: ['#3d5a80', '#98c1d9']
    };

    var chart = new google.visualization.BarChart(document.getElementById('edu_vs_mil_2017'));
    chart.draw(data, options);
} //educationSpendingVMilitary2017

function educationSpendingVMilitary2018(response) {
    var data = response.getDataTable();
    
    var options = {
        vAxis: {title: 'Country'},
        hAxis: {title: 'Spending in Billions ($USD)', slantedText: true, slantedTextAngle: 45},
        bars: 'horizontal',
        isStacked: true,
        title: 'Education Spending vs. Military Spending (2018)',
        width: 550,
        height: 425,
        colors: ['#3d5a80', '#98c1d9']
    };

    var chart = new google.visualization.BarChart(document.getElementById('edu_vs_mil_2018'));
    chart.draw(data, options);
} //educationSpendingVMilitary2018
