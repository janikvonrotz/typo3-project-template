#--------------------------------------------------#
#    Title: TCEFORM Page Layout TSConfig
#--------------------------------------------------#
#    File name:  tceform.ts
#    Description: [Description]
#    Tags: typo3, typoscript, tsconfig, page
#    Project: [Projectname]
#
#    Author: Janik von Rotz
#    Author E-Mail: contact@janikvonrotz.ch
#
#    Create Date: 22.05.2012
#    Last Edit Date: 05.06.2012
#    Version: 1.0.1
#
#    License:
#    This work is licensed under the Creative Commons Attribution-ShareAlike 3.0 Switzerland License.
#    To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/3.0/ch/ or
#    send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
#--------------------------------------------------#

#--------------------------------------------------#
#    Layout Selection
#--------------------------------------------------#

TCEFORM.pages.layout {
     altLabels {
          0 = Default
          1 = teal
          2 = lime
          3 = brown
         
     }
     addItems {
          4 = pink
          5 = orange
          6 = blue
          7 = red
          8 = green
          9 = magenta
          10 = purple
     }
     removeItems =
}

#--------------------------------------------------#
#    tt_content
#--------------------------------------------------# 

TCEFORM.tt_content.header_layout{
     altLabels {
          1 = h1
          2 = h2
          3 = h3
     }
     addItems {
     }
     removeItems = 4,5
}
TCEFORM.tt_content.layout{
     altLabels {
     }
     addItems {
          10 = Gallery
     }
     removeItems = 1,2,3
}

TCEFORM.tt_content {

  imagecols.removeItems = 2,3,4,5,6,7,8
  imagecols = 1  

  imageorient.removeItems = 0,1,2,8,9,10,17,18,25,--div--
  imageorient.disableNoMatchingValueElement = 1
  imageorient = 26

}
