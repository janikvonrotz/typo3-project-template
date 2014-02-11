#--------------------------------------------------#
#    Title: Custom Menu Link Wrap around Content
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

[treeLevel = 2]
page.10.subparts.CONTENT >
page.10.subparts.CONTENT = COA
page.10.subparts.CONTENT.10 = HMENU
page.10.subparts.CONTENT {
  10 = HMENU
  10{
    special = directory
    special.value = 3
    wrap = <div class="tiles">|</div>
    1 = TMENU
    1 {
      noBlur = 1
      expAll = 0
      NO = 1     
      NO {
       
        doNotLinkIt = 1
          stdWrap.cObject = COA
          stdWrap.cObject{
         
               10 = TEXT
              
               10.typolink.ATagBeforeWrap = 1
               10.typolink.parameter.field = uid
              
               10.cObject = COA
               10.cObject{
                             
                    10 = TEXT
                    10.wrap = <div class="tile tile|">
                    10.field = layout
                   
                    20 = TEXT
                    20.wrap = <div class="title">|</div>
                    20.field = title
                   
                    30 = TEXT
                    30.wrap = <div class = "subtitle"><div>|</div></div>
                    30.field = subtitle    

                    100 = TEXT
                    100.value = </div>
               }
          }
      }
     }
  }
}
[global]
