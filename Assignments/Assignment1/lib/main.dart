import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Contact', style: TextStyle(color: Colors.black)),
          backgroundColor: Colors.white,
          leading: Icon(Icons.arrow_back, color: Colors.black),
          centerTitle: true,
          elevation: 0,
        ),
        body: Column(
          children: [
            SizedBox(height: 20),
            CircleAvatar(
              radius: 50,
              backgroundImage: AssetImage('assets/profile.png'),
            ),
            SizedBox(height: 10),
            Text(
              'Saksham Gupta',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            Text(
              'Flutter Dev',
              style: TextStyle(color: Colors.blueGrey),
            ),
            SizedBox(height: 20),
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 16, vertical: 5),
              child: Row(
                children: [
                  Container(
                    padding: EdgeInsets.all(10),
                    decoration: BoxDecoration(
                      color: Colors.grey[200],
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: Icon(Icons.phone, size: 20),
                  ),
                  SizedBox(width: 10),
                  Text('+91 98786 XXXXX'),
                ],
              ),
            ),
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 16, vertical: 5),
              child: Row(
                children: [
                  Container(
                    padding: EdgeInsets.all(10),
                    decoration: BoxDecoration(
                      color: Colors.grey[200],
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: Icon(Icons.email, size: 20),
                  ),
                  SizedBox(width: 10),
                  Text('Avyuktsaksham@gmail.com'),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}