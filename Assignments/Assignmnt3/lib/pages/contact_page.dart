import 'package:flutter/material.dart';

class ContactPage extends StatelessWidget {
  const ContactPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, please don't hesitate to reach out.",
            style: TextStyle(fontSize: 16, color: Colors.grey[800]),
          ),
          SizedBox(height: 20),
          Text(
            'Contact Information',
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 10),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text('Email:', style: TextStyle(fontWeight: FontWeight.bold)),
              Text('support@example.com'),
            ],
          ),
          SizedBox(height: 8),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text('Phone:', style: TextStyle(fontWeight: FontWeight.bold)),
              Text('+1 (555) 123-4567'),
            ],
          ),
          SizedBox(height: 8),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text('Address:', style: TextStyle(fontWeight: FontWeight.bold)),
              Expanded(
                child: Text(
                  '123 Main Street, Anytown, USA',
                  textAlign: TextAlign.right,
                ),
              ),
            ],
          ),
          SizedBox(height: 20),
          Text(
            'Contact Form',
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 10),
          TextField(
            decoration: InputDecoration(
              hintText: 'Your Name',
              filled: true,
              fillColor: Colors.grey[200],
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide: BorderSide.none
              ),
            ),
          ),
          SizedBox(height: 10),
          TextField(
            decoration: InputDecoration(
              hintText: 'Your Email',
              filled: true,
              fillColor: Colors.grey[200],
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide: BorderSide.none
              ),
            ),
          ),
          SizedBox(height: 10),
          TextField(
            maxLines: 5,
            decoration: InputDecoration(
              hintText: 'Your Message',
              filled: true,
              fillColor: Colors.grey[200],
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide: BorderSide.none
              ),
            ),
          ),
          SizedBox(height: 10),
          SizedBox(
            width: double.infinity,
            child: ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.teal,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
              ),
              child: Padding(
                padding: EdgeInsets.symmetric(vertical: 12),
                child: Text(
                  'Send Message',
                  style: TextStyle(color: Colors.white, fontSize: 16),
                ),
              ),
            ),
          ),
          SizedBox(height: 24),
          Text(
            'Follow Us',
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Column(
                children: [
                  CircleAvatar(
                    backgroundColor: Colors.teal,
                    radius: 24,
                    child: Icon(Icons.facebook, color: Colors.white),
                  ),
                  SizedBox(height: 8),
                  Text('Facebook'),
                ],
              ),
              Column(
                children: [
                  CircleAvatar(
                    backgroundColor: Colors.teal,
                    radius: 24,
                    child: Icon(Icons.alternate_email, color: Colors.white),
                  ),
                  SizedBox(height: 8),
                  Text('Twitter'),
                ],
              ),
              Column(
                children: [
                  CircleAvatar(
                    backgroundColor: Colors.teal,
                    radius: 24,
                    child: Icon(Icons.camera_alt, color: Colors.white),
                  ),
                  SizedBox(height: 8),
                  Text('Instagram'),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }
}
