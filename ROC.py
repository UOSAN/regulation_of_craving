#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.1.0),
    on Fri Feb 26 10:23:43 2021
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

rating_keys = ['5', '6', '7', '8', '9']


def convert_key_to_rating(run_number, key):
    rating = None
    if key in rating_keys:
        rating = int(key)
        rating = rating - 4

    return rating


# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.1.0'
expName = 'regulation_of_craving'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '', 'run_number': '1'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/pnovak2/src/smoking/down_regulation_of_craving/ROC.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[2560, 1440], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[-1,-1,-1], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "setup"
setupClock = core.Clock()
# Get window width and height
window_width = win.clientSize[0]
window_height = win.clientSize[1]
participant = expInfo['participant']
run_number = expInfo['run_number']

start_text_str = 'Calibrating scanner'
if run_number == '0':
    start_text_str = 'Instruction text'
conditions_file = 'ROC_Session' + str(run_number) + '.csv'


# Initialize components for Routine "instructions"
instructionsClock = core.Clock()
start_text = visual.TextStim(win=win, name='start_text',
    text=start_text_str,
    font='Helvetica',
    pos=(0, 0), height=0.075, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
start_trigger = keyboard.Keyboard()

# Initialize components for Routine "trial"
trialClock = core.Clock()
fixation = visual.ShapeStim(
    win=win, name='fixation', vertices='cross',units='pix', 
    size=(48, 48),
    ori=0, pos=(0, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1,1,1],
    opacity=1, depth=0.0, interpolate=True)
background = visual.Rect(
    win=win, name='background',units='pix', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=(0, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor='white',
    opacity=1, depth=-1.0, interpolate=True)
black_background = visual.Rect(
    win=win, name='black_background',units='pix', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=(0, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[-1,-1,-1],
    opacity=1, depth=-2.0, interpolate=True)
regulate_look = visual.TextStim(win=win, name='regulate_look',
    text='default text',
    font='Helvetica',
    pos=(0, 0), height=0.075, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
stimulus = visual.ImageStim(
    win=win,
    name='stimulus', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-4.0)
rating_text = visual.TextStim(win=win, name='rating_text',
    text='How much do you desire the item shown in the last picture?',
    font='Helvetica',
    pos=(0, 0.1), height=0.075, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
stim_rating = visual.Slider(win=win, name='stim_rating',
    size=(1.0, 0.025), pos=(0, -0.2), units=None,
    labels=('No Desire', 'Strong Desire'), ticks=(1, 2, 3, 4, 5), granularity=0,
    style='rating', styleTweaks=('triangleMarker',), opacity=1,
    color='LightGray', fillColor='Red', borderColor='White', colorSpace='rgb',
    font='Helvetica', labelHeight=0.05,
    flip=False, depth=-7, readOnly=False)
stim_keyboard = keyboard.Keyboard()

# Initialize components for Routine "end"
endClock = core.Clock()
end_text = visual.TextStim(win=win, name='end_text',
    text='The task is now complete.',
    font='Helvetica',
    pos=(0, 0), height=0.075, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "setup"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
setupComponents = []
for thisComponent in setupComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
setupClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "setup"-------
while continueRoutine:
    # get current time
    t = setupClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=setupClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in setupComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "setup"-------
for thisComponent in setupComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "setup" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructions"-------
continueRoutine = True
# update component parameters for each repeat
start_trigger.keys = []
start_trigger.rt = []
_start_trigger_allKeys = []
# keep track of which components have finished
instructionsComponents = [start_text, start_trigger]
for thisComponent in instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions"-------
while continueRoutine:
    # get current time
    t = instructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *start_text* updates
    if start_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        start_text.frameNStart = frameN  # exact frame index
        start_text.tStart = t  # local t and not account for scr refresh
        start_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(start_text, 'tStartRefresh')  # time at next scr refresh
        start_text.setAutoDraw(True)
    
    # *start_trigger* updates
    waitOnFlip = False
    if start_trigger.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        start_trigger.frameNStart = frameN  # exact frame index
        start_trigger.tStart = t  # local t and not account for scr refresh
        start_trigger.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(start_trigger, 'tStartRefresh')  # time at next scr refresh
        start_trigger.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(start_trigger.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(start_trigger.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if start_trigger.status == STARTED and not waitOnFlip:
        theseKeys = start_trigger.getKeys(keyList=['apostrophe'], waitRelease=False)
        _start_trigger_allKeys.extend(theseKeys)
        if len(_start_trigger_allKeys):
            start_trigger.keys = _start_trigger_allKeys[-1].name  # just the last key pressed
            start_trigger.rt = _start_trigger_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions"-------
for thisComponent in instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions(conditions_file),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "trial"-------
    continueRoutine = True
    # update component parameters for each repeat
    background.setFillColor(background_color)
    background.setSize((window_width, window_height))
    black_background.setSize((window_width - 150, window_height - 150))
    regulate_look.setText(regulate_or_look)
    stimulus.setImage(image_file)
    stim_rating.reset()
    stim_keyboard.keys = []
    stim_keyboard.rt = []
    _stim_keyboard_allKeys = []
    # keep track of which components have finished
    trialComponents = [fixation, background, black_background, regulate_look, stimulus, rating_text, stim_rating, stim_keyboard]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trial"-------
    while continueRoutine:
        # get current time
        t = trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation* updates
        if fixation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation.frameNStart = frameN  # exact frame index
            fixation.tStart = t  # local t and not account for scr refresh
            fixation.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation, 'tStartRefresh')  # time at next scr refresh
            fixation.setAutoDraw(True)
        if fixation.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation.tStartRefresh + jitter_duration-frameTolerance:
                # keep track of stop time/frame for later
                fixation.tStop = t  # not accounting for scr refresh
                fixation.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation, 'tStopRefresh')  # time at next scr refresh
                fixation.setAutoDraw(False)
        
        # *background* updates
        if background.status == NOT_STARTED and tThisFlip >= jitter_duration-frameTolerance:
            # keep track of start time/frame for later
            background.frameNStart = frameN  # exact frame index
            background.tStart = t  # local t and not account for scr refresh
            background.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(background, 'tStartRefresh')  # time at next scr refresh
            background.setAutoDraw(True)
        if background.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > background.tStartRefresh + 11-frameTolerance:
                # keep track of stop time/frame for later
                background.tStop = t  # not accounting for scr refresh
                background.frameNStop = frameN  # exact frame index
                win.timeOnFlip(background, 'tStopRefresh')  # time at next scr refresh
                background.setAutoDraw(False)
        
        # *black_background* updates
        if black_background.status == NOT_STARTED and tThisFlip >= jitter_duration-frameTolerance:
            # keep track of start time/frame for later
            black_background.frameNStart = frameN  # exact frame index
            black_background.tStart = t  # local t and not account for scr refresh
            black_background.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(black_background, 'tStartRefresh')  # time at next scr refresh
            black_background.setAutoDraw(True)
        if black_background.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > black_background.tStartRefresh + 11-frameTolerance:
                # keep track of stop time/frame for later
                black_background.tStop = t  # not accounting for scr refresh
                black_background.frameNStop = frameN  # exact frame index
                win.timeOnFlip(black_background, 'tStopRefresh')  # time at next scr refresh
                black_background.setAutoDraw(False)
        
        # *regulate_look* updates
        if regulate_look.status == NOT_STARTED and tThisFlip >= jitter_duration-frameTolerance:
            # keep track of start time/frame for later
            regulate_look.frameNStart = frameN  # exact frame index
            regulate_look.tStart = t  # local t and not account for scr refresh
            regulate_look.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(regulate_look, 'tStartRefresh')  # time at next scr refresh
            regulate_look.setAutoDraw(True)
        if regulate_look.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > regulate_look.tStartRefresh + 2-frameTolerance:
                # keep track of stop time/frame for later
                regulate_look.tStop = t  # not accounting for scr refresh
                regulate_look.frameNStop = frameN  # exact frame index
                win.timeOnFlip(regulate_look, 'tStopRefresh')  # time at next scr refresh
                regulate_look.setAutoDraw(False)
        
        # *stimulus* updates
        if stimulus.status == NOT_STARTED and tThisFlip >= jitter_duration + 2-frameTolerance:
            # keep track of start time/frame for later
            stimulus.frameNStart = frameN  # exact frame index
            stimulus.tStart = t  # local t and not account for scr refresh
            stimulus.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stimulus, 'tStartRefresh')  # time at next scr refresh
            stimulus.setAutoDraw(True)
        if stimulus.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stimulus.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                stimulus.tStop = t  # not accounting for scr refresh
                stimulus.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stimulus, 'tStopRefresh')  # time at next scr refresh
                stimulus.setAutoDraw(False)
        
        # *rating_text* updates
        if rating_text.status == NOT_STARTED and tThisFlip >= jitter_duration+7-frameTolerance:
            # keep track of start time/frame for later
            rating_text.frameNStart = frameN  # exact frame index
            rating_text.tStart = t  # local t and not account for scr refresh
            rating_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(rating_text, 'tStartRefresh')  # time at next scr refresh
            rating_text.setAutoDraw(True)
        if rating_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > rating_text.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                rating_text.tStop = t  # not accounting for scr refresh
                rating_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(rating_text, 'tStopRefresh')  # time at next scr refresh
                rating_text.setAutoDraw(False)
        # Update marker position and slider rating
        # when there are keypresses of the rating buttons
        r = convert_key_to_rating(expInfo['run_number'], stim_keyboard.keys)
        stim_rating.markerPos = r
        # confirm rating by setting to current markerPos
        stim_rating.rating = r
        
        
        # *stim_rating* updates
        if stim_rating.status == NOT_STARTED and tThisFlip >= jitter_duration+7-frameTolerance:
            # keep track of start time/frame for later
            stim_rating.frameNStart = frameN  # exact frame index
            stim_rating.tStart = t  # local t and not account for scr refresh
            stim_rating.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim_rating, 'tStartRefresh')  # time at next scr refresh
            stim_rating.setAutoDraw(True)
        if stim_rating.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim_rating.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                stim_rating.tStop = t  # not accounting for scr refresh
                stim_rating.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim_rating, 'tStopRefresh')  # time at next scr refresh
                stim_rating.setAutoDraw(False)
        
        # *stim_keyboard* updates
        waitOnFlip = False
        if stim_keyboard.status == NOT_STARTED and tThisFlip >= jitter_duration+7-frameTolerance:
            # keep track of start time/frame for later
            stim_keyboard.frameNStart = frameN  # exact frame index
            stim_keyboard.tStart = t  # local t and not account for scr refresh
            stim_keyboard.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim_keyboard, 'tStartRefresh')  # time at next scr refresh
            stim_keyboard.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(stim_keyboard.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(stim_keyboard.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if stim_keyboard.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim_keyboard.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                stim_keyboard.tStop = t  # not accounting for scr refresh
                stim_keyboard.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim_keyboard, 'tStopRefresh')  # time at next scr refresh
                stim_keyboard.status = FINISHED
        if stim_keyboard.status == STARTED and not waitOnFlip:
            theseKeys = stim_keyboard.getKeys(keyList=['5', '6', '7', '8', '9'], waitRelease=False)
            _stim_keyboard_allKeys.extend(theseKeys)
            if len(_stim_keyboard_allKeys):
                stim_keyboard.keys = _stim_keyboard_allKeys[-1].name  # just the last key pressed
                stim_keyboard.rt = _stim_keyboard_allKeys[-1].rt
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial"-------
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('regulate_look.started', regulate_look.tStartRefresh)
    trials.addData('regulate_look.stopped', regulate_look.tStopRefresh)
    trials.addData('stimulus.started', stimulus.tStartRefresh)
    trials.addData('stimulus.stopped', stimulus.tStopRefresh)
    trials.addData('rating_text.started', rating_text.tStartRefresh)
    trials.addData('rating_text.stopped', rating_text.tStopRefresh)
    trials.addData('stim_rating.response', stim_rating.getRating())
    trials.addData('stim_rating.rt', stim_rating.getRT())
    trials.addData('stim_rating.started', stim_rating.tStartRefresh)
    trials.addData('stim_rating.stopped', stim_rating.tStopRefresh)
    # check responses
    if stim_keyboard.keys in ['', [], None]:  # No response was made
        stim_keyboard.keys = None
    trials.addData('stim_keyboard.keys',stim_keyboard.keys)
    if stim_keyboard.keys != None:  # we had a response
        trials.addData('stim_keyboard.rt', stim_keyboard.rt)
    trials.addData('stim_keyboard.started', stim_keyboard.tStartRefresh)
    trials.addData('stim_keyboard.stopped', stim_keyboard.tStopRefresh)
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials'


# ------Prepare to start Routine "end"-------
continueRoutine = True
routineTimer.add(4.000000)
# update component parameters for each repeat
# keep track of which components have finished
endComponents = [end_text]
for thisComponent in endComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
endClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "end"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = endClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=endClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *end_text* updates
    if end_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_text.frameNStart = frameN  # exact frame index
        end_text.tStart = t  # local t and not account for scr refresh
        end_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_text, 'tStartRefresh')  # time at next scr refresh
        end_text.setAutoDraw(True)
    if end_text.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > end_text.tStartRefresh + 4.0-frameTolerance:
            # keep track of stop time/frame for later
            end_text.tStop = t  # not accounting for scr refresh
            end_text.frameNStop = frameN  # exact frame index
            win.timeOnFlip(end_text, 'tStopRefresh')  # time at next scr refresh
            end_text.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in endComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "end"-------
for thisComponent in endComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
