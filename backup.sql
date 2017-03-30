-- MySQL dump 10.13  Distrib 5.7.17, for osx10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: teacher_db
-- ------------------------------------------------------
-- Server version	5.7.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Assignments`
--

DROP TABLE IF EXISTS `Assignments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Assignments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) NOT NULL,
  `assignment` enum('Assignment One','Assignment Two','Assignment Three','Homework 1','Homework 2','Homework 3') NOT NULL,
  `grade` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `assignments_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `Students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Assignments`
--

LOCK TABLES `Assignments` WRITE;
/*!40000 ALTER TABLE `Assignments` DISABLE KEYS */;
/*!40000 ALTER TABLE `Assignments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Attendances`
--

DROP TABLE IF EXISTS `Attendances`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Attendances` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) NOT NULL,
  `subject` enum('Period One','Period Two','Period Three','Period Four','Period Five','Period Six','Period Seven') DEFAULT 'Period One',
  `date` date NOT NULL,
  `presence` enum('Present','Tardy-Excused','Tardy-Unexcused','Absent') NOT NULL DEFAULT 'Present',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `attendances_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `Students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Attendances`
--

LOCK TABLES `Attendances` WRITE;
/*!40000 ALTER TABLE `Attendances` DISABLE KEYS */;
INSERT INTO `Attendances` VALUES (1,1,'Period One','2017-03-27','Present','2017-03-28 16:45:03','2017-03-28 16:45:03'),(2,2,'Period One','2017-03-27','Tardy-Excused','2017-03-28 16:45:03','2017-03-28 16:45:03'),(3,3,'Period One','2017-03-27','Present','2017-03-28 16:45:03','2017-03-28 16:45:03'),(4,4,'Period One','2017-03-27','Absent','2017-03-28 16:45:03','2017-03-28 16:45:03'),(5,5,'Period One','2017-03-27','Present','2017-03-28 16:45:03','2017-03-28 16:45:03'),(6,6,'Period One','2017-03-27','Present','2017-03-28 16:45:03','2017-03-28 16:45:03'),(7,7,'Period One','2017-03-27','Tardy-Unexcused','2017-03-28 16:45:03','2017-03-28 16:45:03'),(8,8,'Period One','2017-03-27','Absent','2017-03-28 16:45:03','2017-03-28 16:45:03'),(9,9,'Period One','2017-03-27','Present','2017-03-28 16:45:03','2017-03-28 16:45:03'),(10,10,'Period One','2017-03-27','Present','2017-03-28 16:45:03','2017-03-28 16:45:03'),(11,11,'Period One','2017-03-27','Present','2017-03-28 16:45:03','2017-03-28 16:45:03'),(12,12,'Period One','2017-03-27','Present','2017-03-28 16:45:03','2017-03-28 16:45:03'),(13,13,'Period One','2017-03-27','Present','2017-03-28 16:45:03','2017-03-28 16:45:03'),(14,14,'Period One','2017-03-27','Present','2017-03-28 16:45:03','2017-03-28 16:45:03'),(15,1,'Period One','2017-03-18','Present','2017-03-28 20:04:24','2017-03-28 20:04:24'),(16,2,'Period One','2017-03-18','Tardy-Excused','2017-03-28 20:04:24','2017-03-28 20:04:24'),(17,3,'Period One','2017-03-18','Tardy-Excused','2017-03-28 20:04:24','2017-03-28 20:04:24'),(18,4,'Period One','2017-03-18','Present','2017-03-28 20:04:24','2017-03-28 20:04:24'),(19,5,'Period One','2017-03-18','Present','2017-03-28 20:04:24','2017-03-28 20:04:24'),(20,6,'Period One','2017-03-18','Present','2017-03-28 20:04:24','2017-03-28 20:04:24'),(21,7,'Period One','2017-03-18','Present','2017-03-28 20:04:24','2017-03-28 20:04:24'),(22,8,'Period One','2017-03-18','Present','2017-03-28 20:04:24','2017-03-28 20:04:24'),(23,9,'Period One','2017-03-18','Present','2017-03-28 20:04:24','2017-03-28 20:04:24'),(24,10,'Period One','2017-03-18','Present','2017-03-28 20:04:24','2017-03-28 20:04:24'),(25,11,'Period One','2017-03-18','Present','2017-03-28 20:04:24','2017-03-28 20:04:24'),(26,12,'Period One','2017-03-18','Present','2017-03-28 20:04:24','2017-03-28 20:04:24'),(27,13,'Period One','2017-03-18','Present','2017-03-28 20:04:24','2017-03-28 20:04:24'),(28,14,'Period One','2017-03-18','Absent','2017-03-28 20:04:24','2017-03-28 20:04:24'),(29,1,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(30,2,'Period One','2017-03-18','Tardy-Excused','2017-03-28 20:05:58','2017-03-28 20:05:58'),(31,3,'Period One','2017-03-18','Tardy-Excused','2017-03-28 20:05:58','2017-03-28 20:05:58'),(32,4,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(33,5,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(34,6,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(35,7,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(36,8,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(37,9,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(38,10,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(39,11,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(40,12,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(41,13,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(42,14,'Period One','2017-03-18','Absent','2017-03-28 20:05:58','2017-03-28 20:05:58'),(43,1,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(44,2,'Period One','2017-03-18','Tardy-Excused','2017-03-28 20:05:58','2017-03-28 20:05:58'),(45,3,'Period One','2017-03-18','Tardy-Excused','2017-03-28 20:05:58','2017-03-28 20:05:58'),(46,4,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(47,5,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(48,6,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(49,7,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(50,8,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(51,9,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(52,10,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(53,11,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(54,12,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(55,13,'Period One','2017-03-18','Present','2017-03-28 20:05:58','2017-03-28 20:05:58'),(56,14,'Period One','2017-03-18','Absent','2017-03-28 20:05:58','2017-03-28 20:05:58'),(57,1,'Period One','2017-03-18','Present','2017-03-28 20:06:19','2017-03-28 20:06:19'),(58,2,'Period One','2017-03-18','Present','2017-03-28 20:06:19','2017-03-28 20:06:19'),(59,3,'Period One','2017-03-18','Present','2017-03-28 20:06:19','2017-03-28 20:06:19'),(60,4,'Period One','2017-03-18','Present','2017-03-28 20:06:19','2017-03-28 20:06:19'),(61,5,'Period One','2017-03-18','Present','2017-03-28 20:06:19','2017-03-28 20:06:19'),(62,6,'Period One','2017-03-18','Present','2017-03-28 20:06:19','2017-03-28 20:06:19'),(63,7,'Period One','2017-03-18','Present','2017-03-28 20:06:19','2017-03-28 20:06:19'),(64,8,'Period One','2017-03-18','Present','2017-03-28 20:06:19','2017-03-28 20:06:19'),(65,9,'Period One','2017-03-18','Present','2017-03-28 20:06:19','2017-03-28 20:06:19'),(66,10,'Period One','2017-03-18','Present','2017-03-28 20:06:19','2017-03-28 20:06:19'),(67,11,'Period One','2017-03-18','Present','2017-03-28 20:06:19','2017-03-28 20:06:19'),(68,12,'Period One','2017-03-18','Present','2017-03-28 20:06:19','2017-03-28 20:06:19'),(69,13,'Period One','2017-03-18','Present','2017-03-28 20:06:19','2017-03-28 20:06:19'),(70,14,'Period One','2017-03-18','Present','2017-03-28 20:06:19','2017-03-28 20:06:19'),(71,1,'Period One','2017-03-18','Present','2017-03-28 20:07:45','2017-03-28 20:07:45'),(72,2,'Period One','2017-03-18','Present','2017-03-28 20:07:45','2017-03-28 20:07:45'),(73,3,'Period One','2017-03-18','Present','2017-03-28 20:07:45','2017-03-28 20:07:45'),(74,4,'Period One','2017-03-18','Present','2017-03-28 20:07:45','2017-03-28 20:07:45'),(75,5,'Period One','2017-03-18','Present','2017-03-28 20:07:45','2017-03-28 20:07:45'),(76,6,'Period One','2017-03-18','Present','2017-03-28 20:07:45','2017-03-28 20:07:45'),(77,7,'Period One','2017-03-18','Present','2017-03-28 20:07:45','2017-03-28 20:07:45'),(78,8,'Period One','2017-03-18','Present','2017-03-28 20:07:45','2017-03-28 20:07:45'),(79,9,'Period One','2017-03-18','Present','2017-03-28 20:07:45','2017-03-28 20:07:45'),(80,10,'Period One','2017-03-18','Present','2017-03-28 20:07:45','2017-03-28 20:07:45'),(81,11,'Period One','2017-03-18','Present','2017-03-28 20:07:45','2017-03-28 20:07:45'),(82,12,'Period One','2017-03-18','Present','2017-03-28 20:07:45','2017-03-28 20:07:45'),(83,13,'Period One','2017-03-18','Present','2017-03-28 20:07:45','2017-03-28 20:07:45'),(84,14,'Period One','2017-03-18','Present','2017-03-28 20:07:45','2017-03-28 20:07:45'),(85,1,'Period One','2017-03-18','Present','2017-03-28 20:08:50','2017-03-28 20:08:50'),(86,2,'Period One','2017-03-18','Present','2017-03-28 20:08:50','2017-03-28 20:08:50'),(87,3,'Period One','2017-03-18','Present','2017-03-28 20:08:50','2017-03-28 20:08:50'),(88,4,'Period One','2017-03-18','Present','2017-03-28 20:08:50','2017-03-28 20:08:50'),(89,5,'Period One','2017-03-18','Present','2017-03-28 20:08:50','2017-03-28 20:08:50'),(90,6,'Period One','2017-03-18','Present','2017-03-28 20:08:50','2017-03-28 20:08:50'),(91,7,'Period One','2017-03-18','Present','2017-03-28 20:08:50','2017-03-28 20:08:50'),(92,8,'Period One','2017-03-18','Present','2017-03-28 20:08:50','2017-03-28 20:08:50'),(93,9,'Period One','2017-03-18','Present','2017-03-28 20:08:50','2017-03-28 20:08:50'),(94,10,'Period One','2017-03-18','Present','2017-03-28 20:08:50','2017-03-28 20:08:50'),(95,11,'Period One','2017-03-18','Present','2017-03-28 20:08:50','2017-03-28 20:08:50'),(96,12,'Period One','2017-03-18','Present','2017-03-28 20:08:50','2017-03-28 20:08:50'),(97,13,'Period One','2017-03-18','Present','2017-03-28 20:08:50','2017-03-28 20:08:50'),(98,14,'Period One','2017-03-18','Present','2017-03-28 20:08:50','2017-03-28 20:08:50'),(99,1,'Period One','2017-03-18','Present','2017-03-28 20:10:37','2017-03-28 20:10:37'),(100,2,'Period One','2017-03-18','Present','2017-03-28 20:10:37','2017-03-28 20:10:37'),(101,3,'Period One','2017-03-18','Present','2017-03-28 20:10:37','2017-03-28 20:10:37'),(102,4,'Period One','2017-03-18','Present','2017-03-28 20:10:37','2017-03-28 20:10:37'),(103,5,'Period One','2017-03-18','Present','2017-03-28 20:10:37','2017-03-28 20:10:37'),(104,6,'Period One','2017-03-18','Present','2017-03-28 20:10:37','2017-03-28 20:10:37'),(105,7,'Period One','2017-03-18','Present','2017-03-28 20:10:37','2017-03-28 20:10:37'),(106,8,'Period One','2017-03-18','Present','2017-03-28 20:10:37','2017-03-28 20:10:37'),(107,9,'Period One','2017-03-18','Present','2017-03-28 20:10:37','2017-03-28 20:10:37'),(108,10,'Period One','2017-03-18','Present','2017-03-28 20:10:37','2017-03-28 20:10:37'),(109,11,'Period One','2017-03-18','Present','2017-03-28 20:10:37','2017-03-28 20:10:37'),(110,12,'Period One','2017-03-18','Present','2017-03-28 20:10:37','2017-03-28 20:10:37'),(111,13,'Period One','2017-03-18','Present','2017-03-28 20:10:37','2017-03-28 20:10:37'),(112,14,'Period One','2017-03-18','Tardy-Excused','2017-03-28 20:10:37','2017-03-28 20:10:37');
/*!40000 ALTER TABLE `Attendances` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Students`
--

DROP TABLE IF EXISTS `Students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `systemNumber` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `subject` enum('Period One','Period Two','Period Three','Period Four','Period Five','Period Six','Period Seven') DEFAULT 'Period One',
  `birthday` date DEFAULT NULL,
  `allergies` text,
  `iep_modifications` text,
  `active_status` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Students`
--

LOCK TABLES `Students` WRITE;
/*!40000 ALTER TABLE `Students` DISABLE KEYS */;
INSERT INTO `Students` VALUES (1,11111,'Zack','Morris','Period One','1989-01-04','peanut','none',1,'2017-03-27 16:22:59','2017-03-27 16:22:59'),(2,11112,'A.C.','Slater','Period One','1989-02-14','flowers','none',1,'2017-03-27 16:22:59','2017-03-27 16:22:59'),(3,11113,'Kelly','Kapowski','Period One','1989-03-28','none','none',1,'2017-03-27 16:22:59','2017-03-27 16:22:59'),(4,11115,'Screech','Powers','Period One','1989-10-21','peanut','none',1,'2017-03-27 16:22:59','2017-03-27 16:22:59'),(5,11116,'Lisa','Turtle','Period One','1989-09-03','none','none',1,'2017-03-27 16:22:59','2017-03-27 16:22:59'),(6,11117,'Tori','Scott','Period One','1989-06-30','none','none',1,'2017-03-27 16:22:59','2017-03-27 16:22:59'),(7,11118,'Kelly','Taylor','Period One','1988-12-12','none','none',1,'2017-03-27 16:22:59','2017-03-27 16:22:59'),(8,11119,'Steve','Sanders','Period One','1989-01-22','bees','timing',1,'2017-03-27 16:22:59','2017-03-27 16:22:59'),(9,11120,'David','Silver','Period One','1988-11-08','none','none',1,'2017-03-27 16:22:59','2017-03-27 16:22:59'),(10,11121,'Valerie','Malone','Period One','1989-03-27','none','none',1,'2017-03-27 16:22:59','2017-03-27 16:22:59'),(11,11122,'Brandon','Walsh','Period One','1989-05-25','honey','scheduling',1,'2017-03-27 16:22:59','2017-03-27 16:22:59'),(12,11123,'Brenda','Walsh','Period One','1989-05-25','honey','none',1,'2017-03-27 16:22:59','2017-03-27 16:22:59'),(13,11124,'Dylan','McKay','Period One','1989-07-14','none','timing',1,'2017-03-27 16:22:59','2017-03-27 16:22:59'),(14,11125,'Donna','Martin','Period One','1989-09-28','none','none',1,'2017-03-27 16:22:59','2017-03-27 16:22:59'),(15,98765,'Jamie','Pittman','Period One','1984-03-28','none','none',1,'2017-03-29 01:24:06','2017-03-29 01:24:06');
/*!40000 ALTER TABLE `Students` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-03-29 14:13:28
