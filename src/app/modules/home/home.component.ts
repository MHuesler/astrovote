import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  posts = [
    {
      userName: "John Doe",
      ticker: "TRT",
      description: "Building higher lows and in a tight range. Acting nice around the 20day MA. Expecing a range...",
      tags: [
        "breakout"
      ],
      rating: 3,
      votes: 15,
      id: Math.floor(Math.random() * 99999)
    },
    {
      userName: "John Doe",
      ticker: "TRT",
      description: "Building higher lows and in a tight range. Acting nice around the 20day MA. Expecing a range...",
      tags: [
        "breakout"
      ],
      rating: 3,
      votes: 15,
      id: Math.floor(Math.random() * 99999)
    },
    {
      userName: "John Doe",
      ticker: "TRT",
      description: "Building higher lows and in a tight range. Acting nice around the 20day MA. Expecing a range...",
      tags: [
        "breakout"
      ],
      rating: 3,
      votes: 15,
      id: Math.floor(Math.random() * 99999)
    },
    {
      userName: "John Doe",
      ticker: "TRT",
      description: "Building higher lows and in a tight range. Acting nice around the 20day MA. Expecing a range...",
      tags: [
        "breakout"
      ],
      rating: 3,
      votes: 15,
      id: Math.floor(Math.random() * 99999)
    },
    {
      userName: "John Doe",
      ticker: "TRT",
      description: "Building higher lows and in a tight range. Acting nice around the 20day MA. Expecing a range...",
      tags: [
        "breakout"
      ],
      rating: 3,
      votes: 15,
      id: Math.floor(Math.random() * 99999)
    },
    {
      userName: "John Doe",
      ticker: "TRT",
      description: "Building higher lows and in a tight range. Acting nice around the 20day MA. Expecing a range...",
      tags: [
        "breakout"
      ],
      rating: 3,
      votes: 15,
      id: Math.floor(Math.random() * 99999)
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
