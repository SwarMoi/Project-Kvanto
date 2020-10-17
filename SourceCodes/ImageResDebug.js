var timeline = [];

    timeline.push({
                type: 'fullscreen',
                fullscreen_mode: true
    }); 
        
    /* define welcome message trial */
    var welcome = {
      type: "html-keyboard-response",
      stimulus: "Welcome to the experiment. Press any key to begin."
    };
    timeline.push(welcome);   
    
  // html += "<img style='max-width:500px; max-height:400px; ' src='"+jsPsych.timelineVariable('t_image', true)+"'>";
    
    
    var target1 = {
            type: 'html-button-response',
            stimulus: function(){ 
                var html = "<p style='text-align:center; font-weight: 550; font-size:40px;'>"+"প্রতিটা ফুলকে ঠিক তিনটে কাঁকড়া ধরে আছে।"+"</p>";
                html += "<img src=a-640x480.jpg>";
                html += "<p style='text-align:center;'>"+"640x480"+ "</p>";
               
                return html;
            },
            button_html: ['<button class="jspsych-btn"  style = "padding: 10px 20px; font-size: 20px; font-weight:800; ">%choice%</button>', '<button class="jspsych-btn" style = " padding: 10px 20px; font-size: 20px; font-weight: 800; ">%choice%</button>'],
            margin_vertical : '35px',
            margin_horizontal : '120px',
            //prompt: '<span style="font-size:40px;">+</span>',
            choices: ['হ্যাঁ' , 'না' ] ,
            
    }; 
    timeline.push(target1);
    
    var target2 = {
            type: 'html-button-response',
            stimulus: function(){ 
                var html = "<p style='text-align:center; font-weight: 550; font-size:40px;'>"+"প্রতিটা ফুলকে ঠিক তিনটে কাঁকড়া ধরে আছে।"+"</p>";
                html += "<img src=d-640x427.jpg>";
                html += "<p style='text-align:center;'>"+"640x427"+ "</p>";
               
                return html;
            },
            button_html: ['<button class="jspsych-btn"  style = "padding: 10px 20px; font-size: 20px; font-weight:800; ">%choice%</button>', '<button class="jspsych-btn" style = " padding: 10px 20px; font-size: 20px; font-weight: 800; ">%choice%</button>'],
            margin_vertical : '35px',
            margin_horizontal : '120px',
            //prompt: '<span style="font-size:40px;">+</span>',
            choices: ['হ্যাঁ' , 'না' ] ,
            
    }; 
    timeline.push(target2);
    
    var target3 = {
            type: 'html-button-response',
            stimulus: function(){ 
                var html = "<p style='text-align:center; font-weight: 550; font-size:40px;'>"+"প্রতিটা ফুলকে ঠিক তিনটে কাঁকড়া ধরে আছে।"+"</p>";
                html += "<img src=16_M1.png>";
                html += "<p style='text-align:center;'>"+"--"+ "</p>";
               
                return html;
            },
            button_html: ['<button class="jspsych-btn"  style = "padding: 10px 20px; font-size: 20px; font-weight:800; ">%choice%</button>', '<button class="jspsych-btn" style = " padding: 10px 20px; font-size: 20px; font-weight: 800; ">%choice%</button>'],
            margin_vertical : '35px',
            margin_horizontal : '120px',
            //prompt: '<span style="font-size:40px;">+</span>',
            choices: ['হ্যাঁ' , 'না' ] ,
            
    }; 
    timeline.push(target3);
    
    var target4 = {
            type: 'html-button-response',
            stimulus: function(){ 
                var html = "<p style='text-align:center; font-weight: 550; font-size:40px;'>"+"প্রতিটা ফুলকে ঠিক তিনটে কাঁকড়া ধরে আছে।"+"</p>";
                html += "<img src=2_MT.png>";
                html += "<p style='text-align:center;'>"+"600x343"+ "</p>";
               
                return html;
            },
            button_html: ['<button class="jspsych-btn"  style = "padding: 10px 20px; font-size: 20px; font-weight:800; ">%choice%</button>', '<button class="jspsych-btn" style = " padding: 10px 20px; font-size: 20px; font-weight: 800; ">%choice%</button>'],
            margin_vertical : '35px',
            margin_horizontal : '120px',
            //prompt: '<span style="font-size:40px;">+</span>',
            choices: ['হ্যাঁ' , 'না' ] ,
            
    }; 
    timeline.push(target4);
    
    var target5 = {
            type: 'html-button-response',
            stimulus: function(){ 
                var html = "<p style='text-align:center; font-weight: 550; font-size:40px;'>"+"প্রতিটা ফুলকে ঠিক তিনটে কাঁকড়া ধরে আছে।"+"</p>";
                html += "<img style='max-width:500px; max-height:400px; min-height 'src=c8_cE2.png>";
                html += "<p style='text-align:center;'>"+"600x400"+ "</p>";
               
                return html;
            },
            button_html: ['<button class="jspsych-btn"  style = "padding: 10px 20px; font-size: 20px; font-weight:800; ">%choice%</button>', '<button class="jspsych-btn" style = " padding: 10px 20px; font-size: 20px; font-weight: 800; ">%choice%</button>'],
            margin_vertical : '35px',
            margin_horizontal : '120px',
            //prompt: '<span style="font-size:40px;">+</span>',
            choices: ['হ্যাঁ' , 'না' ] ,
            
    }; 
    timeline.push(target5);
    
     var target6 = {
            type: 'html-button-response',
            stimulus: function(){ 
                var html = "<p style='text-align:center; font-weight: 550; font-size:40px;'>"+"প্রতিটা ফুলকে ঠিক তিনটে কাঁকড়া ধরে আছে।"+"</p>";
                html += "<img src=b-640x853.jpg>";
                html += "<p style='text-align:center;'>"+"640x853"+ "</p>";
               
                return html;
            },
            button_html: ['<button class="jspsych-btn"  style = "padding: 10px 20px; font-size: 20px; font-weight:800; ">%choice%</button>', '<button class="jspsych-btn" style = " padding: 10px 20px; font-size: 20px; font-weight: 800; ">%choice%</button>'],
            margin_vertical : '35px',
            margin_horizontal : '120px',
            //prompt: '<span style="font-size:40px;">+</span>',
            choices: ['হ্যাঁ' , 'না' ] ,
            
    }; 
    timeline.push(target6);
    
     var target7 = {
            type: 'html-button-response',
            stimulus: function(){ 
                var html = "<p style='text-align:center; font-weight: 550; font-size:40px;'>"+"প্রতিটা ফুলকে ঠিক তিনটে কাঁকড়া ধরে আছে।"+"</p>";
                html += "<img src=c-640x956.jpg>";
                html += "<p style='text-align:center;'>"+"640x956"+ "</p>";
               
                return html;
            },
            button_html: ['<button class="jspsych-btn"  style = "padding: 10px 20px; font-size: 20px; font-weight:800; ">%choice%</button>', '<button class="jspsych-btn" style = " padding: 10px 20px; font-size: 20px; font-weight: 800; ">%choice%</button>'],
            margin_vertical : '35px',
            margin_horizontal : '120px',
            //prompt: '<span style="font-size:40px;">+</span>',
            choices: ['হ্যাঁ' , 'না' ] ,
            
    }; 
    timeline.push(target7);
    
    
    
    
    
    
    var bye = {
      type: "html-keyboard-response",
      stimulus: "Goodbye. Press ESC key to exit fullscreen mode" 
    };
    timeline.push(bye);
    
    
    /* start the experiment */
    jsPsych.init({
      timeline: timeline,
      //preload_images: all_images,
       on_finish: function() {
                jsPsych.data.displayData();
       }        
       //show_progress_bar: true
      
    });
