#--------------------------------------------------#
#    Title: Clean Image Rendering
#--------------------------------------------------#
#    File name: content.ts
#    Description: [Description]
#    Tags: typo3, typoscript, tssetup
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
#    This work is licensed under the Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License.
#    To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-nd/3.0/ or
#    send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
#--------------------------------------------------#

#--------------------------------------------------#
#    Content Image Rendering
#--------------------------------------------------#
tt_content.image.20.rendering.gallery {
     imageStdWrapNoWidth.wrap = |
     imageStdWrap.dataWrap = |
     imageRowStdWrap.dataWrap = |
     imageLastRowStdWrap.dataWrap = |
     noRowsStdWrap.wrap = |
     oneImageStdWrap.dataWrap = |
     imgTagStdWrap.wrap =  <div class="pic">|</div>
     editIconsStdWrap.wrap = |
     caption.wrap = |
}
#--------------------------------------------------#
#    Image Content Settings
#--------------------------------------------------# 
tt_content.image.wrap = <div class="article image">|</div>
tt_content.image.20 {
     caption >
}
tt_content.image.20.renderMethod = gallery