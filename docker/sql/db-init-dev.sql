CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `beosztas` text,
  `email` varchar(255) DEFAULT NULL,
  `salesperson` tinyint(1) DEFAULT NULL,
  `ID_devices` int DEFAULT NULL,
  `image` varchar(40) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10000011 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `items` (
  `arukod` int NOT NULL,
  `megnev` varchar(255) DEFAULT NULL,
  `csoport` varchar(56) DEFAULT NULL,
  `cikkszam` varchar(15) DEFAULT NULL,
  `has_ready_to_cook_variants` tinyint(1) DEFAULT '0',
  `ear` decimal(20,2) DEFAULT NULL,
  `ear4` decimal(20,2) DEFAULT NULL,
  `ear3` decimal(20,2) DEFAULT NULL,
  `ear1` decimal(20,2) DEFAULT NULL,
  `tipus` int NOT NULL DEFAULT '-1',
  `new` tinyint(1) DEFAULT '1',
  `keszlet` double DEFAULT NULL,
  `batch` double DEFAULT NULL,
  `unit` double DEFAULT NULL,
  `uom` varchar(30) DEFAULT NULL,
  `passziv` bit(1) DEFAULT b'0',
  `fix` tinyint(1) NOT NULL DEFAULT '0',
  `fix_name` varchar(255) DEFAULT NULL,
  `sold_in_batches` tinyint(1) DEFAULT '0',
  `hide_batch` tinyint(1) DEFAULT '0',
  `rendelheto` bit(1) NOT NULL DEFAULT b'0',
  `search_blob` text GENERATED ALWAYS AS (concat_ws(_utf8mb4' ',coalesce(`megnev`,_utf8mb4''),coalesce(`fix_name`,_utf8mb4''),coalesce(`cikkszam`,_utf8mb4''),coalesce(`csoport`,_utf8mb4''))) STORED,
  `custom_unit` float DEFAULT NULL,
  `image` text,
  `vat` float DEFAULT '1.27',
  PRIMARY KEY (`arukod`),
  KEY `index_items_cikkszam` (`cikkszam`),
  FULLTEXT KEY `ft_products_search` (`search_blob`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `clients` (
  `ID` int NOT NULL,
  `vat` varchar(50) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `address_city` varchar(40) DEFAULT NULL,
  `address_zip` varchar(10) DEFAULT NULL,
  `address_combined` varchar(100) DEFAULT NULL,
  `del` tinyint DEFAULT '0',
  `email` varchar(100) DEFAULT NULL,
  `ID_salesman` int DEFAULT NULL,
  `ID_branch` varchar(200) DEFAULT NULL,
  `seasonal` varchar(25) DEFAULT NULL,
  `sms_group` int DEFAULT NULL,
  `business_name` varchar(50) DEFAULT NULL,
  `UNAS_customer_group_ID` int DEFAULT NULL,
  `discount_group_id` int DEFAULT NULL,
  `discount_percentage` double DEFAULT NULL,
  `teruleti_id` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `clients_ID_index` (`ID`),
  KEY `clients_business_name_index` (`business_name`),
  KEY `clients_address_city_index` (`address_city`),
  KEY `clients_address_combined_index` (`address_combined`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `orders` (
  `sorszam` varchar(255) NOT NULL,
  `telj` datetime DEFAULT NULL,
  `kelt` datetime DEFAULT NULL,
  `vevokod` int DEFAULT NULL,
  `vevo` varchar(200) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `zip` varchar(8) DEFAULT NULL,
  `del` tinyint(1) NOT NULL DEFAULT '0',
  `deleted_by` varchar(255) DEFAULT NULL,
  `delete_comment` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`sorszam`),
  KEY `orders_vevokod_telj_index` (`vevokod`,`telj`),
  KEY `orders_vevokod_index` (`vevokod`),
  KEY `orders_telj_index` (`telj` DESC),
  KEY `orders_sorszam_index` (`sorszam`),
  KEY `orders_kelt_index` (`kelt` DESC),
  KEY `orders_vevokod_kelt_index` (`vevokod`,`kelt`),
  KEY `orders_sorszam_index_2` (`sorszam`),
  KEY `index_orders_vevekod_kelt_sorszam` (`vevokod`,`kelt` DESC,`sorszam`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `order_items` (
  `unikazon` varchar(10) NOT NULL,
  `sorszam` varchar(15) DEFAULT NULL,
  `mennyiseg` float DEFAULT NULL,
  `amenny` float DEFAULT NULL,
  `egyseg` varchar(10) DEFAULT NULL,
  `netto` float DEFAULT NULL,
  `brutto` float DEFAULT NULL,
  `cikkszam` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`unikazon`),
  KEY `order_items_unikazon_sorszam_index` (`sorszam`),
  KEY `idx_order_items_client_sku` (`sorszam`,`cikkszam`),
  KEY `index_order_items_client_sku` (`sorszam`,`cikkszam`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `recommendations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `client_id` int NOT NULL,
  `arukod` int NOT NULL,
  `recommended_by` int NOT NULL,
  `recommendation_price` decimal(10,0) NOT NULL,
  `recommended_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_recommendations_client_id` (`client_id`),
  KEY `idx_recommendations_arukod` (`arukod`),
  KEY `idx_recommendations_recommended_by` (`recommended_by`),
  CONSTRAINT `fk_client_id` FOREIGN KEY (`client_id`) REFERENCES `clients` (`ID`),
  CONSTRAINT `fk_items_arukod` FOREIGN KEY (`arukod`) REFERENCES `items` (`arukod`),
  CONSTRAINT `fk_users_recommended_by` FOREIGN KEY (`recommended_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `recommendation_usages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `recommendation_id` int NOT NULL,
  `order_item_id` varchar(10) NOT NULL,
  `confirmed_by` int NOT NULL,
  `is_influenced` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_recommendation_usages_confirmed_by` (`confirmed_by`),
  KEY `idx_recommendation_usages_recommendation_id` (`recommendation_id`),
  KEY `idx_recommendation_usages_order_item_id` (`order_item_id`),
  CONSTRAINT `fk_order_items_order_item_id` FOREIGN KEY (`order_item_id`) REFERENCES `order_items` (`unikazon`),
  CONSTRAINT `fk_recommendation_id` FOREIGN KEY (`recommendation_id`) REFERENCES `recommendations` (`id`),
  CONSTRAINT `fk_users_confirmed_by` FOREIGN KEY (`confirmed_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;