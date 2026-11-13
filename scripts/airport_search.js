var airportsList;
/************************************/

function load_airports_list() {
  airportsList = JSON.parse(airport_list);

  for (i = 0; i < airportsList.length; i++) {
    airportsList[i].Show = airportsList[i].AirportName + ", " +  airportsList[i].CountryName + " (" + airportsList[i].AirportCode +")" ;
  }

  aui_init_search_list(airportsList);
  console.log("load_airport_code done!");
}

function save_airport_value(question, value) {
  console.log("question:", question);
  console.log("value:", value);

  
  switch (question) {
    case "F3":
      api.fn.answers({F3_AirportCode:   value.AirportCode}); 
      api.fn.answers({F3_AirportName:   value.AirportName}); 
      api.fn.answers({F3_CountryCode:   value.CountryCode}); 
      api.fn.answers({F3_CountryName:   value.CountryName}); 
      break;

    case "F7_3":
      api.fn.answers({F7_3_AirportCode:   value.AirportCode}); 
      api.fn.answers({F7_3_AirportName:   value.AirportName}); 
      api.fn.answers({F7_3_CountryCode:   value.CountryCode}); 
      api.fn.answers({F7_3_CountryName:   value.CountryName}); 
      break;

    default:
      break;
  }


  console.log("save_airport_value  done!");
}

function show_airport_search_box(question) {
  load_airports_list();
  
  var defaultValue = "";

  aui_show_external_search_box(question, defaultValue);
}

function hide_airport_search_box() {
  aui_hide_external_search_box();
}