-- SET NAMES utf8mb4;
-- SET character_set_results = utf8mb4;
-- SET character_set_server = utf8mb4;
-- CREATE DATABASE `twitter`;

DROP TABLE IF EXISTS `tweet`;

CREATE TABLE IF NOT EXISTS `tweet` (
  `tweet_id` bigint(20) unsigned NOT NULL,
  `tweet_text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `screen_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(40) DEFAULT NULL,
  `profile_image_url` varchar(200) DEFAULT NULL,
  `sentiment_score`int(1) NOT NULL,
  `retweets`int(10),
  KEY `created_at` (`created_at`),
  FULLTEXT (`tweet_text`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

