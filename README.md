# museumPlanner
<p>Final project for LIS657 - a tool to plan museum outings in NYC</p>
<p>link to site: http://mysite.pratt.edu/~dfrank13/index.html</p>
<br>
<p>Initial Prototype Update:</p>
<br>
Shallow aspects: <br>
*The list of museums are hardcoded to show a sample of what the features on the site should be doing.<br>
*The map is a link to a map I created using Carto which shows the density of museums and also shows the name, address, and webside of each museum on the list, but I would like to switch to a Google map API as this will allow me to have more control over what museums are showing sync the map with the search features<br>
<br>
Things that work/don't work:<br>
*The Museum Name search bar does not work, and I'm considering getting rid of it, because I'm not sure how necessary the tool is, but I'll wait for user feedback to get more of an opinion.<br>
*The days checkboxes currently do not work nor does the discount checkbox, but the borough checkboxes are working and can be activated using the search button to filter the list<br>
*At the bottom of the page are the customized lists. The Add to: buttons are working, but are currently only coordinated to work with the first museum on the list. I was thinking it might be nice to add a reset button and/or. a remove button to each of the lists as well.

****************************************************************************************************************************
**************************************Second Update:************************************************************************

Scope:
* The components of the site include the search box, which allows users to either browse the list of museums by day and/or borough, or search for museums using a search bar. Both options can be used in combination. 
* The next component is the list of museums, arranged in an accordian to condense space, with dropdown panels revealing museum days/hours, borough, and discount options. There is also a checkbox next to each museum in the list to allow users to add the museum to their customized list. 
* The custome lists are on a separate page and consists of a limit of 4 lists that users can customize by name and content. To add to the list, users select museums they wish to add in the main museum list. They then select which list they wish to add to from the dropdown menu at the top of the main page and hit select. Removing museums is a similar process which starts from the lists page.
* The map shows markers for each of the museums on the list and includes info pannels with the museum's address and a link to the museum's website.
* Added an About modal which is activated from the menu bar at the top of the page
* Also moved the link to the custom lists page to the new menu bar

Task1:
Bill learns that he has class off next Tuesday and decides he wants to visit a museum during his new found free time. He's not in the mood for traveling far though, and wants to visit somewhere close to his home in the village. 

Goal 1: Find a museum that is open in Tuesday in Manhattan

Subgoals:
1.1. Open The Museum Planner on his computer
1.2. Selectes Tuesday from the dropdown menu
1.3. Unchecks all of the boroughs except for Manhattan and his Search (6 museums are left in list)
1.4. Checks the map, and realizes that two of the museums are north of Central park and further than he wants to travel
1.5. Clicks on the other four museums to read more about them in their dropdown pannels
1.6. Sees that the Morgan has free hours on Tuesday, decides to go their, and closes the website

Task2:
Sue and Matt love visiting museums together and want to visit as many as they can. To keep track of where they have already been and where they want to go, Sue has created some custome lists to organize their visits including: 'Top picks', 'Seen already', and 'Date night!'

Goal 2: They just visited MoMI and want to take it off of the 'Top picks' list and add to the 'Seen already' list.

Subgoals:
2.1. Sue opens The Museum Planner on her computer
2.2. She clicks on 'My Lists' in the top left of the menu bar and is taken to her lists page
2.3. She finds 'Museum of the Moving Image' under 'Top picks' and clicks the check box
2.4. She selects 'Top picks' from the dropdown panel in the menu bar at the top of the page
2.5. She hits 'Select List' and the museum is removed from her selected list
2.6. She clicks 'Home' in the top left menu bar and is returned to the home page
2.7. She searches for 'image' in the search bar (she's in a hurry and doesn't want to type the whole name)
2.8. 'Museum of the Moving Image' is the only museum left in the list and she checks the box next to it
2.9. She finds 'Seen already' in the dropdown at the top right of the menu bar and selects it
2.10. She clicks the 'Enter Selected' button and the museum is added to the new list

How to finish the website/things that could be better:
1. Search through days:
    This feature is still not working. The issue appears to be figuring out how to create a listener for when an item is selected in a dropdown menu. I've tested it with a button and it appears to work that way, but does not work while sharing a button with the borough checkboxes. So I would either need to find a way to add a listener to selecting a dropdown item or add a button for this feature as well.
2. Users able to add museums to lists:
    I've been looking into cookies a little and I think I would need to make each of the museums into cookies so that they could be used again on a different page. The javascript to move the museums to a list has been tested on the same page and works, but when it's moving an object to another html page, the code doesn't work
3. Users can change list names which then appear in the dropdown lists panel:
    This part I thought might work better with local storage so that when users enter names into the input fields on the 'My Lists' page, and the names are then added to the dropdown pannel in the top menu bar both on the home page and the lists page. That way the names stay the same, but can be changed when users change the name of their list.
4. Alert users that button did something:
    I realized that it might be helpful for users to see that their list has been added to without having to go to the page and check. To do this, run a validation so that if at least one museum was selected and a list to add it to was chosen then an alert would come up when users hit to button saying 'x museum(s) was added to y list' or 'museum successfully added'. If no museums were checked, then an alert would appear saying 'No musuems checked' and if a list wasn't selected an alert could say 'Which list would you list to add to?'
5. Map icons disappear as their corresponding museum disappears in the main list:
    This idea I haven't quite figured out. My initial idea was to put the code that initiates the marker into the individual museum section so that when that museum is hidden, then the icon is hidden too, and you're left with only icons for the museums still left in the list. But I'm not sure how I would do that or if that's even how it works. 
6. Map info window closes when a second one is opened so only one window is showing at a time
    This one is another issue that I'm not as clear on how to solve. It's also more of an annoyance than anything else. There's probably something I could add like on widown display, if more than one is open, close all other info panels. I'm not sure how to code that specifically.
