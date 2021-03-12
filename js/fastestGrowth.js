google.charts.load('current', {'packages':['corechart', 'geochart']});
google.charts.setOnLoadCallback(drawAllSheets);

function drawAllSheets() {
    drawSheetName('fastest-growth', 'SELECT B,C', fastestGrowthHealthAbs);
    drawSheetName('fastest-growth', 'SELECT B,D', fastestGrowthHealthRel);
    drawSheetName('fastest-growth', 'SELECT B,E', fastestGrowthEducationAbs);
    drawSheetName('fastest-growth', 'SELECT B,F', fastestGrowthEducationRel);
} //drawAllSheets

function drawSheetName(sheetName, query, responseHandler){
    var queryString = encodeURIComponent(query);
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/14NNxsz_D33wYcB0xRYZnx5GH9xkSqXCn5BzNI_7KRbI/gviz/tq?sheet='
        + sheetName + '&headers=1&tq=' + queryString
    );

    query.send(responseHandler);
} //drawSheetName

function fastestGrowthHealthAbs(response){
    var data = response.getDataTable();
    data.sort({column: 1, desc: true});

    var options = {
        title: 'Absolute Change in Healthcare from 2013 to 2018',
        hAxis: {title: 'Country', slantedText: true, slantedTextAngle: 45},
        vAxis: {title: 'Spending Change in $USD'},
        annotations: {alwaysOutside: true},
        width: 1150,
        height: 600,
        legend: 'none',
        colors: ['#274c77']
    };

    var view = new google.visualization.DataView(data);
            view.setColumns([0,1, {
                calc: function(dt, row) {
                    return Math.ceil((dt.getFormattedValue(row, 1)) / 1000000000) + ' $Bil';
                },
                sourceColumn: 1,
                type: 'string',
                role: 'annotation'
            }]);

    var chart = new google.visualization.ColumnChart(document.getElementById('absolute_change_health'));
    chart.draw(view, options);
} //fastestGrowthHealthAbs

function fastestGrowthHealthRel(response){
    var data = response.getDataTable();
    data.sort({column: 1, desc: true});

    var options = {
        title: 'Relative (%) Change in Healthcare from 2013 to 2018',
        hAxis: {title: 'Country', slantedText: true, slantedTextAngle: 45},
        vAxis: {title: 'Percent Change (%)'},
        annotations: {alwaysOutside: true},
        width: 1150,
        height: 600,
        legend: 'none',
        colors: ['#274c77']
    };

    var view = new google.visualization.DataView(data);
            view.setColumns([0,1, {
                calc: function(dt, row) {
                    return Math.ceil(dt.getFormattedValue(row, 1)) + '%';
                },
                sourceColumn: 1,
                type: 'string',
                role: 'annotation'
            }]);

    var chart = new google.visualization.ColumnChart(document.getElementById('relative_change_health'));
    chart.draw(view, options);
} //fastestGrowthHealthRel

function fastestGrowthEducationAbs(response){
    var data = response.getDataTable();
    data.sort({column: 1, desc: true});

    var options = {
        title: 'Absolute Change in Education from 2013 to 2018',
        hAxis: {title: 'Country', slantedText: true, slantedTextAngle: 45},
        vAxis: {title: 'Spending Change in $USD'},
        annotations: {alwaysOutside: true},
        width: 1150,
        height: 600,
        legend: 'none',
        colors: ['#274c77']
    };

    var view = new google.visualization.DataView(data);
            view.setColumns([0,1, {
                calc: function(dt, row) {
                    return Math.ceil((dt.getFormattedValue(row, 1)) / 1000000000) + ' $Bil';
                },
                sourceColumn: 1,
                type: 'string',
                role: 'annotation'
            }]);

    var chart = new google.visualization.ColumnChart(document.getElementById('absolute_change_education'));
    chart.draw(view, options);
} //fastestGrowthEducationAbs

function fastestGrowthEducationRel(response){
    var data = response.getDataTable();
    data.sort({column: 1, desc: true});

    var options = {
        title: 'Relative (%) Change in Education from 2013 to 2018',
        hAxis: {title: 'Country', slantedText: true, slantedTextAngle: 45},
        vAxis: {title: 'Percent Change (%)'},
        annotations: {alwaysOutside: true},
        width: 1150,
        height: 600,
        legend: 'none',
        colors: ['#274c77']
    };

    var view = new google.visualization.DataView(data);
            view.setColumns([0,1, {
                calc: function(dt, row) {
                    return Math.ceil(dt.getFormattedValue(row, 1)) + '%';
                },
                sourceColumn: 1,
                type: 'string',
                role: 'annotation'
            }]);

    var chart = new google.visualization.ColumnChart(document.getElementById('relative_change_education'));
    chart.draw(view, options);
} //fastestGrowthEducationRel
