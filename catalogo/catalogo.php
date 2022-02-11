<?php
	$i = $_GET['indice'];
	$catalogo=[
		['imagen' => 'img/ktm.jpg',
		'codigo' => 'ktm_450_r_2022',
		'precio' => 25900,
		'desc' => 'Creada de forma específica y dotada de la tecnología más extrema, la KTM 450 RALLY FACTORY REPLICA  2022 está preparada para enfrentarse a la carrera más dura del mundo. Basándose en la experiencia de múltiples victorias en la disciplina de los rallys, así como en las aportaciones de pilotos que sólo viven para ganar, la KTM 450 RALLY FACTORY REPLICA  2022 sigue siendo la máquina de rally más READY TO RACE del mercado.',
		'nom' => 'KTM 450 RALLY'
		],
		['imagen' => 'img/fantic.jpg',
		'codigo' => 'fan_450_r_2022',
		'precio' => 28900,
		'desc' => 'La diferencia principal respecto la versión estándar Fantic XEF 450 la encontramos en la carrocería, ahora de plexiglás con un diseño claramente enfocado para las competiciones de raid, el depósito de combustible de 30 litros, la torre de instrumentos, y una serie de mejoras en el chasis con miras a la rigidez estructural. La suspensión de la XEF 450 Rally es una KYB especialmente calibrada aunque completamente regulable en hidráulico y precarga, de 310 mm de recorrido y 48 mm de diámetro. El freno delantero cuenta con un disco de 300 mm y viene equipada con llanta delantera de 21" como es obvio y neumáticos específicos de raid.',
		'nom' => 'Fantic 450 RALLY'
		],
		['imagen' => 'img/husbarna.jpg',
		'codigo' => 'hus_450_r_2022',
		'precio' => 29500,
		'desc' => 'El modelo cumbre de la gama Husqvarna de motocross, la FC 450, disfruta de una avanzada tecnología que no tan solo le permite extraer 63 CV de su motor de 450 cc, sino también posicionar los ejes internos del mismo más cerca del centro de gravedad para un comportamiento y manejabilidad ampliamente mejorados. La adición del control de salida permite una aceleración perfecta desde la salida, mientras que la mejor ergonomía de su clase y el control de tracción garantizan el mejor control al piloto.',
		'nom' => 'Husbarna 450 RALLY'
		],
		['imagen' => 'img/kawa.jpg',
		'codigo' => 'kawa_450_r_2022',
		'precio' => 26800,
		'desc' => 'Con más campeonatos de Supercross y Motocross que cualquier otro fabricante, el nombre KX es
			sinónimo de victoria. La KX450 representa el buque insignia de la gama KX, construida
			con el único propósito de dominar la pista. Durante las últimas cuatro décadas,
			hemos aprendido lo que se necesita para ganar y mantenerse en la cima.
			Nuestra dedicación a la construcción de la máquina definitiva es
			innegable, y la KX450 lo representa al máximo. Características:
			Motor de 4 tiempos de 449cc con mayores prestaciones,
			nuevo embrague hidráulico de discos cónicos, nuevo
			manillar Renthal Fatbar. ',
			'nom' => 'Kawasaki 450'
		]
	];
echo json_encode($catalogo[$i]);