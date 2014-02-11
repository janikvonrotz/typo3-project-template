#--------------------------------------------------#
#    Title: Navigation List Menu
#--------------------------------------------------#
#    File name:  content.ts
#    Description: [Description]
#    Tags: typo3, typoscript, tssetup, page
#    Project: [Projectname]
#
#    Author: Janik von Rotz
#    Author E-Mail: contact@janikvonrotz.ch
#
#    Create Date: 22.05.2012
#    Last Edit Date: 22.05.2012
#    Version: 1.0.0
#
#    License:
#    This work is licensed under the Creative Commons Attribution-ShareAlike 3.0 Switzerland License.
#    To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/3.0/ch/ or
#    send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
#--------------------------------------------------#

page.10.subparts.NAVIGATION = HMENU
page.10.subparts.NAVIGATION{
  entryLevel = {$entryLevel}
  wrap = <ul>|</ul>
  1 = TMENU
  1.NO.linkWrap = <li>|</li>

  1.CUR = 1
  1.CUR.linkWrap = <li class="active"><a href="#">|</a></li>
  1.CUR.doNotLinkIt = 1 
}    