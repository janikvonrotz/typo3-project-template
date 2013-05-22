#--------------------------------------------------#
#    Title: Language Selection Vertical List Menu
#--------------------------------------------------#
#    File name:  page.ts
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

page.10.subparts.LANGUAGE = COA
page.10.subparts.LANGUAGE.wrap = <div class="language-selector">|</div>
page.10.subparts.LANGUAGE{
    #German
  10 = TEXT
  10{
    wrap = <a href="|">Deutsch</a>
    typolink.parameter.data = page:alias // TSFE:id
    typolink.additionalParams = &L={$language_german_id}
    typolink.returnLast = url
  }
 
  15 = TEXT
  15.value = &nbsp;|&nbsp;
 
    #English
  20 = TEXT
  20{
    wrap = <a href="|">English</a>
    typolink.parameter.data = page:alias // TSFE:id
    typolink.additionalParams = &L={$language_english_id}
    typolink.returnLast = url
  }
 
  25 = TEXT
  25.value = &nbsp;|&nbsp;
 
    #French
  30 = TEXT
  30{
    wrap = <a href="|">French</a>
    typolink.parameter.data = page:alias // TSFE:id
    typolink.additionalParams = &L={$language_french_id}
    typolink.returnLast = url
  }
 
  35 = TEXT
  35.value = &nbsp;|&nbsp;
 
    #Spanish
  40 = TEXT
  40{
    wrap = <a href="|">Spanish</a>
    typolink.parameter.data = page:alias // TSFE:id
    typolink.additionalParams = &L={$language_spanish_id}
    typolink.returnLast = url
  }
 
  45 = TEXT
  45.value = &nbsp;|&nbsp;
 
    #Dutch
  50 = TEXT
  50{
    wrap = <a href="|">Dutch</a>
    typolink.parameter.data = page:alias // TSFE:id
    typolink.additionalParams = &L={$language_dutch_id}
    typolink.returnLast = url
  }
 
  55 = TEXT
  55.value = &nbsp;|&nbsp;
 
    #Portugese
  60 = TEXT
  60{
    wrap = <a href="|">Portugese</a>
    typolink.parameter.data = page:alias // TSFE:id
    typolink.additionalParams = &L={$language_portugese_id}
    typolink.returnLast = url
  }
}