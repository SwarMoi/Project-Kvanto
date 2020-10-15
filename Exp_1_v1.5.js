/* create timeline */
    var timeline = [];
    
    var practice_trial = prac;
    
    /* combine trial information from the ambiguous word and filler arrays to use in the main task */
     var main_trial=block[CONDITION - 1].concat(fnC);
    //console.log('main' + JSON.stringify(main_trial))
     
    
    // create list of all audio files for preloading
        var all_images = [];
        for (var i=0; i<practice_trial.length; i++) {
            all_images.push(practice_trial[i].t_image);
        }
        for (var i=0; i<main_trial.length; i++) {
            all_images.push(main_trial[i].t_image);
        }
    
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

    /* Display the Condition Number*/
    var blue_trial = {
      type: 'html-button-response',
      //stimulus: '<p>Condition Number : ' + CONDITION +'</p>' + '<p> Block Number : ' + block[CONDITION - 1] + '<p>',
      stimulus :"<p> Condition Number  </p>" + CONDITION,
      choices: ['prev', 'next']
    };
    timeline.push(blue_trial);
    
    var fixation = {
            type: 'html-keyboard-response',
            stimulus: '<span style="font-size:40px;">+</span>',
            choices: jsPsych.NO_KEYS,
            trial_duration: 500,
            data: {
                trial_part: 'fixation', 
                task_part: jsPsych.timelineVariable('task_part')
            }
        };
    
    var target = {
            type: 'html-button-response',
            stimulus: function(){ 
                var html = "<p style='text-align:center; font-weight: 550; font-size:40px;'>"+jsPsych.timelineVariable('t_sentence', true)+"</p>";
                html += "<img style='max-width:500px; max-height:400px; min-width:300px' src='"+jsPsych.timelineVariable('t_image', true)+"'>";
                html += "<p style='text-align:center;'>"+jsPsych.timelineVariable('condition', true)+ "</p>";
                html += "<p style='text-align:center;'>"+jsPsych.timelineVariable('key', true)+ "</p>";
                return html;
            },
            button_html: ['<button class="jspsych-btn"  style = "padding: 10px 20px; font-size: 20px; font-weight:800; ">%choice%</button>', '<button class="jspsych-btn" style = " padding: 10px 20px; font-size: 20px; font-weight: 800; ">%choice%</button>'],
            margin_vertical : '35px',
            margin_horizontal : '120px',
            //prompt: '<span style="font-size:40px;">+</span>',
            choices: ['হ্যাঁ' , 'না' ] ,
            data: {
                key: jsPsych.timelineVariable('key'),
                t_sentence: jsPsych.timelineVariable('t_sentence'),
                t_image: jsPsych.timelineVariable('t_image'),
                condition: jsPsych.timelineVariable('condition'),
                c_response: jsPsych.timelineVariable('c_response'),
                task_part: jsPsych.timelineVariable('task_part')
            }
    };        
    
     var Practice_msg = {
      type: "html-keyboard-response",
      stimulus: "Practice. Press any key to continue"
    };
    timeline.push(Practice_msg);
    
    var prac_procedure = {
            timeline: [fixation, target],
            timeline_variables: practice_trial,
            randomize_order: true
        };
    timeline.push(prac_procedure);
    
     var start_task = {
            type: 'html-button-response',
            stimulus: "<p>Great! You're done with the practice trials.</p><p>Now you won't see any feedback about your response.</p><p>Click the 'Next' button to start.</p>",
            choices: ['Next'],
            response_ends_trial: true
        }
        timeline.push(start_task);
    
    var Main_msg = {
      type: "html-keyboard-response",
      stimulus: "Get Ready,We will begin the Experiment. Press any key to continue"
    };
    timeline.push(Main_msg);
    
    var main_procedure = {
            timeline: [fixation, target],
            timeline_variables: main_trial,
            randomize_order: true
        };
        timeline.push(main_procedure);
        
    var end_screen = {
            type: 'html-keyboard-response',
            stimulus: "Thanks, you're done with the task!", 
            choices: ['space']
        };
        timeline.push(end_screen);    
    
    var bye = {
      type: "html-keyboard-response",
      stimulus: "Goodbye. Press ESC key to exit fullscreen mode" 
    };
    timeline.push(bye);

    /* start the experiment */
    jsPsych.init({
      timeline: timeline,
       preload_images: all_images,
       on_finish: function() {
                jsPsych.data.displayData();
       }        
       //show_progress_bar: true
      
    });
