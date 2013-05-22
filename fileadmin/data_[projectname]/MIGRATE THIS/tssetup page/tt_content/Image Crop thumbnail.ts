#--------------------------------------------------#
#    Title: Image Crop thumbnail
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

#--------------------------------------------------#
#    Setup
#--------------------------------------------------#  

tt_content.image.20 {
     // cropscale thumbnail images
     equalH.if.value.field = layout
          #Image Gallery Layout
     equalH.if.equals = {$gallery_layout_id}
     equalH.if.negate = 1

     1.file.width.stdWrap.wrap = |c
     1.file.width.stdWrap.if.value.field = layout
     1.file.width.stdWrap.if.equals = {$gallery_layout_id}
     1.file.height.field = imageheight
     1.file.height.wrap = |c
     1.file.height.if.value.field = layout
     1.file.height.if.equals = {$gallery_layout_id}
}

#--------------------------------------------------#
#    TCEform
#--------------------------------------------------#  

TCEFORM.tt_content.layout.addItems.10 = Gallery

#--------------------------------------------------#
#    Root Page Constant
#--------------------------------------------------#  

# cat=website settings; type=int+; label= Set id for the Gallery Layout Selection
gallery_layout_id = 10

