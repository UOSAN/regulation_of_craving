/************ 
 * Roc Test *
 ************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1), (- 1), (- 1)]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'ROC';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '', 'run_number': '1'};

// Start code blocks for 'Before Experiment'
var _pj;

function _pj_snippets(container) {
    function in_es6(left, right) {
        if (((right instanceof Array) || ((typeof right) === "string"))) {
            return (right.indexOf(left) > (- 1));
        } else {
            if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                return right.has(left);
            } else {
                return (left in right);
            }
        }
    }
    container["in_es6"] = in_es6;
    return container;
}
_pj = {};
_pj_snippets(_pj);
rating_keys = ["5", "6", "7", "8", "9"];

var rating;
function convert_key_to_rating(run_number, key) {
    var rating;
    rating = null;
    if (_pj.in_es6(key, rating_keys)) {
        rating = Number.parseInt(key);
        if ((run_number !== "0")) {
            rating = (rating - 4);
        }
    }
    return rating;
}

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {name: 'ROC_Session0.csv', path: './resources/ROC_Session0.csv'},
    {name: 'ROC_Session1.csv', path: './resources/ROC_Session1.csv'},
    {name: 'ROC_Session2.csv', path: './resources/ROC_Session2.csv'},
    {name: 'ROC_Session3.csv', path: './resources/ROC_Session3.csv'},
    {name: 'ROC_Session4.csv', path: './resources/ROC_Session4.csv'},
    {name: 'ROC_Session5.csv', path: './resources/ROC_Session5.csv'},
    {name: 'Resources/tobacco_0002.jpg', path: './resources/Resources/tobacco_0002.jpg'},
    {name: 'Resources/healthy2.jpg', path: './resources/Resources/healthy2.jpg'},
    {name: 'Resources/tobacco_0016.jpg', path: './resources/Resources/tobacco_0016.jpg'},
    {name: 'Resources/tobacco_0011.jpg', path: './resources/Resources/tobacco_0011.jpg'},
    {name: 'Resources/healthy5.jpg', path: './resources/Resources/healthy5.jpg'},
    {name: 'Resources/healthy8.jpg', path: './resources/Resources/healthy8.jpg'},
    {name: 'Resources/tobacco_0030.jpg', path: './resources/Resources/tobacco_0030.jpg'},
    {name: 'Resources/tobacco_0038.jpg', path: './resources/Resources/tobacco_0038.jpg'},
    {name: 'Resources/healthy11.jpg', path: './resources/Resources/healthy11.jpg'},
    {name: 'Resources/healthy14.jpg', path: './resources/Resources/healthy14.jpg'},
    {name: 'Resources/tobacco_0033.jpg', path: './resources/Resources/tobacco_0033.jpg'},
    {name: 'Resources/tobacco_0032.jpg', path: './resources/Resources/tobacco_0032.jpg'},
    {name: 'Resources/tobacco_0031.jpg', path: './resources/Resources/tobacco_0031.jpg'},
    {name: 'Resources/healthy19.jpg', path: './resources/Resources/healthy19.jpg'},
    {name: 'Resources/healthy20.jpg', path: './resources/Resources/healthy20.jpg'},
    {name: 'Resources/tobacco_0019.jpg', path: './resources/Resources/tobacco_0019.jpg'},
    {name: 'Resources/healthy21.jpg', path: './resources/Resources/healthy21.jpg'},
    {name: 'Resources/healthy23.jpg', path: './resources/Resources/healthy23.jpg'},
    {name: 'Resources/tobacco_0029.jpg', path: './resources/Resources/tobacco_0029.jpg'},
    {name: 'Resources/tobacco_0015.jpg', path: './resources/Resources/tobacco_0015.jpg'},
    {name: 'Resources/healthy27.jpg', path: './resources/Resources/healthy27.jpg'},
    {name: 'Resources/healthy29.jpg', path: './resources/Resources/healthy29.jpg'},
    {name: 'Resources/healthy32.jpg', path: './resources/Resources/healthy32.jpg'},
    {name: 'Resources/tobacco_0025.jpg', path: './resources/Resources/tobacco_0025.jpg'},
    {name: 'Resources/tobacco_0027.jpg', path: './resources/Resources/tobacco_0027.jpg'},
    {name: 'Resources/healthy33.jpg', path: './resources/Resources/healthy33.jpg'},
    {name: 'Resources/tobacco_0005.jpg', path: './resources/Resources/tobacco_0005.jpg'},
    {name: 'Resources/healthy34.jpg', path: './resources/Resources/healthy34.jpg'},
    {name: 'Resources/healthy35.jpg', path: './resources/Resources/healthy35.jpg'},
    {name: 'Resources/tobacco_0012.jpg', path: './resources/Resources/tobacco_0012.jpg'},
    {name: 'Resources/healthy36.jpg', path: './resources/Resources/healthy36.jpg'},
    {name: 'Resources/healthy37.jpg', path: './resources/Resources/healthy37.jpg'},
    {name: 'Resources/tobacco_0037.jpg', path: './resources/Resources/tobacco_0037.jpg'},
    {name: 'Resources/tobacco_0014.jpg', path: './resources/Resources/tobacco_0014.jpg'},
    {name: 'Resources/tobacco_0003.jpg', path: './resources/Resources/tobacco_0003.jpg'},
    {name: 'Resources/tobacco_0018.jpg', path: './resources/Resources/tobacco_0018.jpg'},
    {name: 'Resources/healthy39.jpg', path: './resources/Resources/healthy39.jpg'},
    {name: 'Resources/healthy41.jpg', path: './resources/Resources/healthy41.jpg'},
    {name: 'Resources/healthy45.jpg', path: './resources/Resources/healthy45.jpg'},
    {name: 'Resources/tobacco_0039.jpg', path: './resources/Resources/tobacco_0039.jpg'},
  ],
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.10';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var setupClock;
var window_width;
var window_height;
var participant;
var run_number;
var start_text_str;
var conditions_file;
var instructionsClock;
var start_text;
var start_trigger;
var trialClock;
var fixation;
var background;
var black_background;
var regulate_look;
var stimulus;
var rating_text;
var stim_rating;
var stim_keyboard;
var endClock;
var end_text;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  window_width = psychoJS.window.size[0];
  window_height = psychoJS.window.size[1];
  
  participant = expInfo["participant"];
  run_number = expInfo["run_number"];
  start_text_str = "Calibrating scanner";
  if ((run_number === "0")) {
      start_text_str = "Instruction text";
  }
  conditions_file = (("ROC_Session" + run_number.toString()) + ".csv");
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  start_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_text',
    text: start_text_str,
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  start_trigger = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  fixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation', units : 'pix', 
    vertices: 'cross', size:[48, 48],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  background = new visual.Rect ({
    win: psychoJS.window, name: 'background', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  black_background = new visual.Rect ({
    win: psychoJS.window, name: 'black_background', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  regulate_look = new visual.TextStim({
    win: psychoJS.window,
    name: 'regulate_look',
    text: 'default text',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  stimulus = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimulus', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  rating_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rating_text',
    text: 'How much do you desire the item shown in the last picture?',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0.1], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  stim_rating = new visual.Slider({
    win: psychoJS.window, name: 'stim_rating',
    size: [1.0, 0.025], pos: [0, (- 0.2)], units: 'height',
    labels: ["No Desire", "Strong Desire"], ticks: [1, 2, 3, 4, 5],
    granularity: 0, style: [visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -7, 
    flip: false,
  });
  
  stim_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'The task is now complete.',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var setupComponents;
function setupRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'setup'-------
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    setupComponents = [];
    
    setupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function setupRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'setup'-------
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    setupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setupRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'setup'-------
    setupComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _start_trigger_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    start_trigger.keys = undefined;
    start_trigger.rt = undefined;
    _start_trigger_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(start_text);
    instructionsComponents.push(start_trigger);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_text* updates
    if (t >= 0.0 && start_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_text.tStart = t;  // (not accounting for frame time here)
      start_text.frameNStart = frameN;  // exact frame index
      
      start_text.setAutoDraw(true);
    }

    
    // *start_trigger* updates
    if (t >= 0.0 && start_trigger.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_trigger.tStart = t;  // (not accounting for frame time here)
      start_trigger.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_trigger.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_trigger.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_trigger.clearEvents(); });
    }

    if (start_trigger.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_trigger.getKeys({keyList: [], waitRelease: false});
      _start_trigger_allKeys = _start_trigger_allKeys.concat(theseKeys);
      if (_start_trigger_allKeys.length > 0) {
        start_trigger.keys = _start_trigger_allKeys[_start_trigger_allKeys.length - 1].name;  // just the last key pressed
        start_trigger.rt = _start_trigger_allKeys[_start_trigger_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions'-------
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: conditions_file,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(trialRoutineBegin(snapshot));
    trialsLoopScheduler.add(trialRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(trialRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var _stim_keyboard_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    background.setSize([window_width, window_height]);
    background.setFillColor(new util.Color(background_color));
    black_background.setSize([(window_width - 150), (window_height - 150)]);
    regulate_look.setText(regulate_or_look);
    stimulus.setImage(image_file);
    
    stim_rating.reset()
    stim_keyboard.keys = undefined;
    stim_keyboard.rt = undefined;
    _stim_keyboard_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(fixation);
    trialComponents.push(background);
    trialComponents.push(black_background);
    trialComponents.push(regulate_look);
    trialComponents.push(stimulus);
    trialComponents.push(rating_text);
    trialComponents.push(stim_rating);
    trialComponents.push(stim_keyboard);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
var r;
function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + jitter_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fixation.status === PsychoJS.Status.STARTED || fixation.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    // *background* updates
    if (t >= jitter_duration && background.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background.tStart = t;  // (not accounting for frame time here)
      background.frameNStart = frameN;  // exact frame index
      
      background.setAutoDraw(true);
    }

    frameRemains = jitter_duration + 11 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((background.status === PsychoJS.Status.STARTED || background.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      background.setAutoDraw(false);
    }
    
    // *black_background* updates
    if (t >= jitter_duration && black_background.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      black_background.tStart = t;  // (not accounting for frame time here)
      black_background.frameNStart = frameN;  // exact frame index
      
      black_background.setAutoDraw(true);
    }

    frameRemains = jitter_duration + 11 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((black_background.status === PsychoJS.Status.STARTED || black_background.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      black_background.setAutoDraw(false);
    }
    
    // *regulate_look* updates
    if (t >= jitter_duration && regulate_look.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      regulate_look.tStart = t;  // (not accounting for frame time here)
      regulate_look.frameNStart = frameN;  // exact frame index
      
      regulate_look.setAutoDraw(true);
    }

    frameRemains = jitter_duration + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((regulate_look.status === PsychoJS.Status.STARTED || regulate_look.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      regulate_look.setAutoDraw(false);
    }
    
    // *stimulus* updates
    if (t >= (jitter_duration + 2) && stimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimulus.tStart = t;  // (not accounting for frame time here)
      stimulus.frameNStart = frameN;  // exact frame index
      
      stimulus.setAutoDraw(true);
    }

    frameRemains = (jitter_duration + 2) + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((stimulus.status === PsychoJS.Status.STARTED || stimulus.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      stimulus.setAutoDraw(false);
    }
    
    // *rating_text* updates
    if (t >= (jitter_duration + 7) && rating_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rating_text.tStart = t;  // (not accounting for frame time here)
      rating_text.frameNStart = frameN;  // exact frame index
      
      rating_text.setAutoDraw(true);
    }

    frameRemains = (jitter_duration + 7) + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((rating_text.status === PsychoJS.Status.STARTED || rating_text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      rating_text.setAutoDraw(false);
    }
    r = convert_key_to_rating(expInfo["run_number"], stim_keyboard.keys);
    stim_rating.markerPos = r;
    stim_rating.rating = r;
    
    
    // *stim_rating* updates
    if (t >= (jitter_duration + 7) && stim_rating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_rating.tStart = t;  // (not accounting for frame time here)
      stim_rating.frameNStart = frameN;  // exact frame index
      
      stim_rating.setAutoDraw(true);
    }

    frameRemains = (jitter_duration + 7) + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((stim_rating.status === PsychoJS.Status.STARTED || stim_rating.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      stim_rating.setAutoDraw(false);
    }
    
    // *stim_keyboard* updates
    if (t >= (jitter_duration + 7) && stim_keyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_keyboard.tStart = t;  // (not accounting for frame time here)
      stim_keyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { stim_keyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { stim_keyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { stim_keyboard.clearEvents(); });
    }

    frameRemains = (jitter_duration + 7) + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((stim_keyboard.status === PsychoJS.Status.STARTED || stim_keyboard.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      stim_keyboard.status = PsychoJS.Status.FINISHED;
  }

    if (stim_keyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = stim_keyboard.getKeys({keyList: ['5', '6', '7', '8', '9'], waitRelease: false});
      _stim_keyboard_allKeys = _stim_keyboard_allKeys.concat(theseKeys);
      if (_stim_keyboard_allKeys.length > 0) {
        stim_keyboard.keys = _stim_keyboard_allKeys[_stim_keyboard_allKeys.length - 1].name;  // just the last key pressed
        stim_keyboard.rt = _stim_keyboard_allKeys[_stim_keyboard_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('stim_rating.response', stim_rating.getRating());
    psychoJS.experiment.addData('stim_rating.rt', stim_rating.getRT());
    psychoJS.experiment.addData('stim_keyboard.keys', stim_keyboard.keys);
    if (typeof stim_keyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('stim_keyboard.rt', stim_keyboard.rt);
        }
    
    stim_keyboard.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var endComponents;
function endRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'end'-------
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((end_text.status === PsychoJS.Status.STARTED || end_text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      end_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'end'-------
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
