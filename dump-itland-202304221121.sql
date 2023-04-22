-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: itland
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Samsung'),(2,'Apple'),(3,'Xiaomi'),(4,'Motorola'),(5,'LG'),(6,'Noblex'),(7,'Philips'),(8,'Huawei'),(9,'Oppo'),(10,'Philco'),(11,'Acer'),(12,'Asus'),(13,'Dell');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `camera`
--

DROP TABLE IF EXISTS `camera`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `camera` (
  `id` int NOT NULL AUTO_INCREMENT,
  `resolution` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `camera`
--

LOCK TABLES `camera` WRITE;
/*!40000 ALTER TABLE `camera` DISABLE KEYS */;
INSERT INTO `camera` VALUES (8,'108 MP'),(9,'64 MP'),(10,'50 MP'),(11,'48 MP'),(12,'40 MP'),(13,'32 MP'),(14,'12 MP');
/*!40000 ALTER TABLE `camera` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts_users`
--

DROP TABLE IF EXISTS `carts_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cart_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `carts_users_FK` (`cart_id`),
  KEY `carts_users_FK_1` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts_users`
--

LOCK TABLES `carts_users` WRITE;
/*!40000 ALTER TABLE `carts_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Smartphones'),(3,'Smart Tv'),(4,'Notebooks'),(5,'Tablets');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `color` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'Black'),(2,'white'),(3,'Cream'),(4,'red'),(5,'purple'),(6,'blue'),(8,'grey'),(9,'gold'),(10,'silver'),(11,'green');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (37,'image-1682166607363-.png','0000-00-00 00:00:00',NULL,NULL),(38,'image-1682166607366-.png','0000-00-00 00:00:00',NULL,NULL),(39,'image-1682166607367-.png','0000-00-00 00:00:00',NULL,NULL),(40,'image-1682166607367-.png','0000-00-00 00:00:00',NULL,NULL),(41,'image-1682166607368-.jpg','0000-00-00 00:00:00',NULL,NULL),(42,'image-1682166607371-.jpg','0000-00-00 00:00:00',NULL,NULL),(43,'image-1682166989595-.png','0000-00-00 00:00:00',NULL,NULL),(44,'image-1682166989598-.png','0000-00-00 00:00:00',NULL,NULL),(45,'image-1682166989601-.png','0000-00-00 00:00:00',NULL,NULL),(46,'image-1682166989603-.png','0000-00-00 00:00:00',NULL,NULL),(47,'image-1682166989605-.jpg','0000-00-00 00:00:00',NULL,NULL),(48,'image-1682166989606-.jpg','0000-00-00 00:00:00',NULL,NULL),(49,'image-1682167422306-.png','0000-00-00 00:00:00',NULL,NULL),(50,'image-1682167422313-.png','0000-00-00 00:00:00',NULL,NULL),(51,'image-1682167422318-.png','0000-00-00 00:00:00',NULL,NULL),(52,'image-1682167422321-.png','0000-00-00 00:00:00',NULL,NULL),(53,'image-1682167422324-.jpg','0000-00-00 00:00:00',NULL,NULL),(54,'file-1682170374332-.jpg','0000-00-00 00:00:00',NULL,'2023-04-22 13:40:04'),(55,'file-1682170387433-.jfif','0000-00-00 00:00:00',NULL,'2023-04-22 13:39:58'),(56,'file-1682171012859-.jfif','0000-00-00 00:00:00','2023-04-22 13:43:32','2023-04-22 14:00:05'),(57,'image-1682167530095-.jpg','0000-00-00 00:00:00',NULL,'2023-04-22 13:59:28'),(58,'files-1682171379953-.webp','2023-04-22 13:49:40','2023-04-22 13:49:40','2023-04-22 14:01:13'),(59,'files-1682171379955-.webp','2023-04-22 13:49:40','2023-04-22 13:49:40','2023-04-22 14:00:09'),(60,'file-1682172086389-.jfif','2023-04-22 13:49:40','2023-04-22 14:01:26',NULL),(61,'files-1682171379959-.jpg','2023-04-22 13:49:40','2023-04-22 13:49:40','2023-04-22 13:59:08'),(62,'image-1682171891163-.webp','2023-04-22 13:58:11','2023-04-22 13:58:11',NULL),(63,'image-1682171891166-.webp','2023-04-22 13:58:11','2023-04-22 13:58:11',NULL),(64,'image-1682171891169-.webp','2023-04-22 13:58:11','2023-04-22 13:58:11',NULL),(65,'image-1682171891170-.webp','2023-04-22 13:58:11','2023-04-22 13:58:11',NULL),(66,'image-1682171891177-.webp','2023-04-22 13:58:11','2023-04-22 13:58:11',NULL),(67,'files-1682172017302-.jpg','2023-04-22 14:00:17','2023-04-22 14:00:17',NULL),(68,'files-1682172026148-.jfif','2023-04-22 14:00:26','2023-04-22 14:00:26',NULL),(69,'files-1682172123343-.jfif','2023-04-22 14:02:03','2023-04-22 14:02:03',NULL),(70,'files-1682172136503-.jfif','2023-04-22 14:02:16','2023-04-22 14:02:16',NULL);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `memories`
--

DROP TABLE IF EXISTS `memories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `memories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `memory` varchar(10) NOT NULL,
  `type` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `memories`
--

LOCK TABLES `memories` WRITE;
/*!40000 ALTER TABLE `memories` DISABLE KEYS */;
INSERT INTO `memories` VALUES (1,'2GB','RAM'),(2,'3GB','RAM'),(3,'4GB','RAM'),(4,'6GB','RAM'),(5,'8GB','RAM'),(6,'12GB','RAM'),(7,'16GB','RAM'),(8,'32GB','RAM'),(9,'16GB','R0M'),(10,'32GB','R0M'),(11,'64GB','R0M'),(12,'128GB','R0M'),(13,'256GB','R0M'),(14,'512GB','R0M');
/*!40000 ALTER TABLE `memories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(120) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `discount` int NOT NULL,
  `width` decimal(10,0) NOT NULL,
  `height` decimal(10,0) NOT NULL,
  `length` decimal(10,0) NOT NULL,
  `camera_id` int NOT NULL,
  `memory_id` int NOT NULL DEFAULT '8',
  `description` varchar(500) NOT NULL,
  `category_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `stock` int NOT NULL,
  `brands_id` int NOT NULL,
  `colors_id` int NOT NULL,
  `sub_category_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_FK` (`category_id`),
  KEY `products_FK_1` (`camera_id`),
  KEY `products_FK_2` (`memory_id`),
  KEY `products_FK_3` (`brands_id`),
  KEY `products_FK_4` (`colors_id`),
  KEY `products_FK_5` (`sub_category_id`),
  CONSTRAINT `products_FK` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_FK_1` FOREIGN KEY (`camera_id`) REFERENCES `camera` (`id`),
  CONSTRAINT `products_FK_2` FOREIGN KEY (`memory_id`) REFERENCES `memories` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `products_FK_3` FOREIGN KEY (`brands_id`) REFERENCES `brands` (`id`) ON UPDATE RESTRICT,
  CONSTRAINT `products_FK_4` FOREIGN KEY (`colors_id`) REFERENCES `colors` (`id`),
  CONSTRAINT `products_FK_5` FOREIGN KEY (`sub_category_id`) REFERENCES `sub_categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (18,'Samsung S21 FE',145000,23,2,2,2,11,8,'Triple Cámara trasera de 12 MP + 12 MP + 8 MP Cámara Frontal de 32 MP. Infinity-O Display de 6.4\" FHD+ Dynamic AMOLED 2X HID 120Hz. Procesador Exynos 2100 | Octa-Core 2.9GHz,2.8GHz,2.2GHz. 4.500 mAh para mayor duración de la batería y 25W Super Fast charging\r\n\r\n',1,'2023-04-22 12:30:07','2023-04-22 12:30:07','2023-04-22 12:35:29',12,1,1,1),(19,'Samsung S21 FE',2222,2,2,2,2,8,8,'Triple Cámara trasera de 12 MP + 12 MP + 8 MP Cámara Frontal de 32 MP. Infinity-O Display de 6.4\" FHD+ Dynamic AMOLED 2X HID 120Hz. Procesador Exynos 2100 | Octa-Core 2.9GHz,2.8GHz,2.2GHz. 4.500 mAh para mayor duración de la batería y 25W Super Fast charging\r\n\r\n',1,'2023-04-22 12:31:35','2023-04-22 12:31:35','2023-04-22 12:35:31',21,5,2,1),(20,'Samsung S21 FE',2000,12,2,22,2,9,8,'Triple Cámara trasera de 12 MP + 12 MP + 8 MP Cámara Frontal de 32 MP. Infinity-O Display de 6.4\" FHD+ Dynamic AMOLED 2X HID 120Hz. Procesador Exynos 2100 | Octa-Core 2.9GHz,2.8GHz,2.2GHz. 4.500 mAh para mayor duración de la batería y 25W Super Fast charging\r\n\r\n',1,'2023-04-22 12:36:29','2023-04-22 12:36:29','2023-04-22 12:44:18',43,1,2,1),(21,'Samsung S21 FE',145000,23,12,21,21,12,8,'Triple Cámara trasera de 12 MP + 12 MP + 8 MP Cámara Frontal de 32 MP. Infinity-O Display de 6.4\" FHD+ Dynamic AMOLED 2X HID 120Hz. Procesador Exynos 2100 | Octa-Core 2.9GHz,2.8GHz,2.2GHz. 4.500 mAh para mayor duración de la batería y 25W Super Fast charging\r\n\r\n',1,'2023-04-22 12:43:42','2023-04-22 12:43:42','2023-04-22 12:43:49',21,1,2,1),(22,'Samsung S21 FE',2121,21,21,21,21,11,8,'Triple Cámara trasera de 12 MP + 12 MP + 8 MP Cámara Frontal de 32 MP. Infinity-O Display de 6.4\" FHD+ Dynamic AMOLED 2X HID 120Hz. Procesador Exynos 2100 | Octa-Core 2.9GHz,2.8GHz,2.2GHz. 4.500 mAh para mayor duración de la batería y 25W Super Fast charging\r\n\r\n',1,'2023-04-22 12:45:30','2023-04-22 13:15:45',NULL,21,1,2,1),(23,'Samsung galaxy A03',2,2,2,2,2,10,8,'ww    console.log(error)            \r\n',1,'2023-04-22 13:58:11','2023-04-22 13:58:11','2023-04-22 13:58:54',21,4,2,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_images`
--

DROP TABLE IF EXISTS `products_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `products_id` int NOT NULL,
  `images_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_images_FK` (`products_id`),
  KEY `products_images_FK_1` (`images_id`),
  CONSTRAINT `products_images_FK` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`),
  CONSTRAINT `products_images_FK_1` FOREIGN KEY (`images_id`) REFERENCES `images` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_images`
--

LOCK TABLES `products_images` WRITE;
/*!40000 ALTER TABLE `products_images` DISABLE KEYS */;
INSERT INTO `products_images` VALUES (33,18,37),(34,18,38),(35,18,39),(36,18,40),(37,18,41),(38,18,42),(39,20,43),(40,20,44),(41,20,45),(42,20,46),(43,20,47),(44,20,48),(45,21,49),(46,21,50),(47,21,51),(48,21,52),(49,21,53),(50,22,54),(51,22,55),(52,22,56),(53,22,57),(54,22,58),(55,22,59),(56,22,60),(57,22,61),(58,23,62),(59,23,63),(60,23,64),(61,23,65),(62,23,66),(63,22,67),(64,22,68),(65,22,69),(66,22,70);
/*!40000 ALTER TABLE `products_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_categories`
--

DROP TABLE IF EXISTS `sub_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_categories`
--

LOCK TABLES `sub_categories` WRITE;
/*!40000 ALTER TABLE `sub_categories` DISABLE KEYS */;
INSERT INTO `sub_categories` VALUES (1,'Offers'),(3,'New in'),(4,'Best deals'),(5,'Catalog');
/*!40000 ALTER TABLE `sub_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(100) NOT NULL,
  `rol_id` int NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `address` varchar(150) NOT NULL,
  `cell` int DEFAULT '0',
  `image` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_un` (`email`),
  KEY `users_FK_1` (`rol_id`),
  CONSTRAINT `users_FK_1` FOREIGN KEY (`rol_id`) REFERENCES `users_rol` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (11,'rodolfito','soto','robertito@gmail.com','$2b$10$.ei29FTa5lyESZrhEi5X4uJSG7jeRAum692hPpt/o/8qI3DpBNyie',1,'2023-04-16 22:44:57','2023-04-18 23:46:44',NULL,'calle falsa 123',NULL,'image-1681861604755-.jfif'),(13,'goku','soto','rgoku@gmail.com','$2b$10$NuigeXjbEcNFaZARA3xJQe5wC80vLABQUEAcSVt8S3va19DZk1Qlq',1,'2023-04-22 10:45:46','2023-04-22 10:45:46',NULL,'sw',2,'usuarioDefault.png');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_rol`
--

DROP TABLE IF EXISTS `users_rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_rol` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_rol`
--

LOCK TABLES `users_rol` WRITE;
/*!40000 ALTER TABLE `users_rol` DISABLE KEYS */;
INSERT INTO `users_rol` VALUES (1,'user'),(2,'admin');
/*!40000 ALTER TABLE `users_rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'itland'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-22 11:21:32
