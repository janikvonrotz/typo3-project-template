<?php

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl'] = array (
    '_DEFAULT' => array (
        'init' => array (
            'enableCHashCache' => '1',
            'enableUrlDecodeCache' => '1',
            'enableUrlEncodeCache' => '1',
            // 'appendMissingSlash' => 'ifNotFile',
            'noMatch' => 'bypass',
        ),
        'redirects' => array (
        'noMatch' => 'bypass',
        ),
        'preVars' => array (
            '0' => array (
                'GETvar' => 'no_cache',
                'valueMap' => array (
                    // 'nc' => '1'
                ),
                'noMatch' => 'bypass'
            ),
            // '1' => array (
                // 'GETvar' => 'L',
                  // 'valueMap' => array(
                        // 'de' => '0',
                        // 'fr' => '1',
                  // ),
                // 'valueDefault' => 'de',
                // // 'noMatch' => 'bypass'
            // ),
        ),
        'pagePath' => array (
            'type' => 'user',
            'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
            'spaceCharacter' => '-',
            'languageGetVar' => 'L',
            'expireDays' => '7',
            'rootpage_id' => '1',
            'firstHitPathCache' => 1
        ),
        'fixedPostVars' => array (
        ),
        
        'postVarSets' => array (
            '_DEFAULT' => array (
           
                'archive' => array (
						array('GETvar' => 'tx_ttnews[year]' , ),                
						array('GETvar' => 'tx_ttnews[month]' , ),
						array('GETvar' => 'tx_ttnews[day]' , )
                ),
				'search'	=> array(
						array('GETvar'	=> 'tx_indexedsearch[ext]',),				
						array('GETvar'	=> 'tx_indexedsearch[sword]',),
						array('GETvar'	=> 'tx_indexedsearch[submit_button]',),
						array('GETvar'	=> 'tx_indexedsearch[_sections]',),
						array('GETvar'	=> 'tx_indexedsearch[pointer]',	), 
				),
                'browse' => array (
                    '0' => array (
                        'GETvar' => 'tx_ttnews[pointer]'
                    ),
                ),
                'select_category' => array (
                    '0' => array (
                        'GETvar' => 'tx_ttnews[cat]'
                    ),
                ),
                'article' => array (
                    '0' => array (
                        'GETvar' => 'tx_ttnews[tt_news]',
                        'lookUpTable' => array (
                            'table' => 'tt_news',
                            'id_field' => 'uid',
                            'alias_field' => 'title',
                            'addWhereClause' => ' AND NOT deleted',
                            'useUniqueCache' => '1',
                            'useUniqueCache_conf' => array (
                                'strtolower' => '1',
                                'spaceCharacter' => '-'
                            ),
                        ),
                    ),
                    '1' => array (
                        'GETvar' => 'tx_ttnews[swords]'
                    ),
                ),
				'ref' => array(
					array(
						'GETvar' => 'tx_dmmjobcontrol_pi1[job_uid]',
						'lookUpTable' => array(
							'table' => 'tx_dmmjobcontrol_job',
							'id_field' => 'uid',
							'alias_field' => 'job_title',
							'addWhereClause' => ' AND NOT deleted',
							'useUniqueCache' => 1,
							'useUniqueCache_conf' => array(
								'strtolower' => 1,
								'spaceCharacter' => '-'
								),
							'languageGetVar' => 'L',
							'languageExceptionUids' => '',
							'languageField' => 'sys_language_uid',
							'transOrigPointerField' => 'l18n_parent'
						),
					),
				),
				
				'products' => array(
					array(
						'GETvar' => 'tx_in2product_pi1[action]',
						'valueMap' => array(
							'list' => 'list',
							'cat' => 'category',
							'detail' => 'detail'
						),
					),
					array(
						'GETvar' => 'tx_in2product_pi1[controller]',
        				'noMatch' => 'bypass',
					),
					array(
						'GETvar' => 'tx_in2product_pi1[product]',
						'lookUpTable' => array(
							'table' => 'tx_in2product_domain_model_product',
							'id_field' => 'uid',
							'alias_field' => 'CONCAT(number, "_", title)',
							'addWhereClause' => ' AND hidden = 0 AND deleted = 0',
							'useUniqueCache' => 1,
							'useUniqueCache_conf' => array(
								'strtolower' => 1,
								'spaceCharacter' => '-',
							),
						),
					),
				),
				
				'page' => array(
					array(
					'GETvar' => 'tx_dmmjobcontrol_pi1[page]',
					),
				),
				
				
				/*
'galerie' => array(
					array(
					'GETvar' => 'tx_chgallery_pi1[pointer]',
					),
					array(
					'GETvar' => 'tx_chgallery_pi1[dir]',
					),
					array(
					'GETvar' => 'tx_chgallery_pi1[single]',
					),
				),  
*/ 
				
				/*
				'download' => array(
					array(
						'GETvar' => 'tx_abdownloads_pi1[uid]',
						'lookUpTable' => array(
							'table' => 'tx_abdownloads_download',
							'id_field' => 'uid',
							'alias_field' => 'label',
							'addWhereClause' => ' AND NOT deleted',
							'useUniqueCache' => 1,
							'useUniqueCache_conf' => array(
								'strtolower' => 1,
								'spaceCharacter' => '-',
							),
						),
					),
				),							  

					
				'action'	=> array(
						array('GETvar'	=> 'tx_abdownloads_pi1[action]',),
				),	
				
				*/	

				'checkout'	=> array(
						array(
							'GETvar'	=> 'tx_ttproducts_pi1[backPID]',
							      'valueMap' => array(
				                        'update' => '707',
				                        'update' => '709',
				                        'update' => '710',
				                        'update' => '711',
				                        'update' => '712',
					                  ),
						),						
				),					   
        
                
            ),
        ),
        'fileName' => array (
            'index' => array (
                'rss.xml' => array (
                    'keyValues' => array (
                        'type' => '100'
                    ),
                ),
                'rss091.xml' => array (
                    'keyValues' => array (
                        'type' => '101'
                    ),
                ),
                'rdf.xml' => array (
                    'keyValues' => array (
                        'type' => '102'
                    ),
                ),
                'atom.xml' => array (
                    'keyValues' => array (
                        'type' => '103'
                    ),
                ),
            ),
            'defaultToHTMLsuffixOnPrev' => 1
        ),
    ),
);
?>