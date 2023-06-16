# CSV.File-Reader-with-NodeJs
 
This repository provides a tutorial on how to read and write CSV files in Node.js using the `node-csv` module. CSV (Comma Separated Values) is a common file format for storing tabular data.

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Usage](#usage)
- [Conclusion](#conclusion)
- [Reference](#reference)

## Introduction
This tutorial focuses on using Node.js and the `node-csv` module to read and write CSV files. Node.js provides several modules, including `node-csv`, that allow seamless interaction with CSV files. In this tutorial, you'll learn how to read CSV files using Node.js streams to handle large datasets efficiently. Additionally, you'll explore how to parse data from a CSV file and insert it into a SQLite database. Finally, you'll retrieve data from the database, parse it using `node-csv`, and write it back to a CSV file.

## Prerequisites
To follow along with this tutorial, you'll need the following:

1. Node.js installed on your local or server environment.
2. SQLite installed on your local or server environment.
3. Familiarity with writing a Node.js program.
4. Basic understanding of Node.js streams.

## Setup
1. Clone this repository to your local machine.
2. Navigate to the project directory: `cd csv_demo`.
3. Install the required dependencies by running the following command: `npm install`.

## Usage
The repository includes the following files:

- `readCSV.js`: Demonstrates how to read a CSV file and log the parsed data.
- `db.js`: Illustrates how to insert data from a CSV file into a SQLite database.

To run the examples, follow these steps:

1. To read a CSV file, run the command: `node readCSV.js`. The parsed data will be logged to the console.
2. To insert data from a CSV file into a SQLite database, run the command: `node db.js`. The database file `data.db` will be created if it doesn't exist, and the data will be inserted into a table.

Feel free to modify the code to suit your specific requirements and explore other functionalities provided by the `node-csv` module.

## Conclusion
By following this tutorial, you've learned how to use Node.js and the `node-csv` module to read and write CSV files. You now have the skills to efficiently handle large datasets using Node.js streams and parse data from CSV files. Additionally, you've explored how to insert data into a SQLite database and retrieve it for further processing. With these techniques, you can effectively work with CSV files in your Node.js applications.

## Reference
For more information and detailed code explanations, please refer to the following DigitalOcean tutorial: [How To Read and Write CSV Files in Node.js using node-csv](https://www.digitalocean.com/community/tutorials/how-to-read-and-write-csv-files-in-node-js-using-node-csv)
