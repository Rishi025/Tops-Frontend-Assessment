
      var add_btn = document.getElementById("add_btn");

      add_btn.addEventListener("click", test);

      function test() {
        var add_data = document.getElementById("add_data");

        var data_value = add_data.value;

        if (data_value == "") {
          alert("Please Enter Data:");
        } else {
          var big_list = document.createElement("li");

          big_list.innerHTML = data_value;

          var main_list = document.getElementById("main_list");

          //   main_list.append(big_list);

          main_list.appendChild(big_list);

          // add_data.value = " ";

          add_data.value = "";
        }
      }