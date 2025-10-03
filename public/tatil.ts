import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tatiller',
  templateUrl: '/tatil.html',
  styleUrls: ['/tatil.css']  // CSS dosyasını buraya ekliyoruz
})
export class TatillerComponent implements OnInit {
  tatiller = [];

  ngOnInit(): void {
    this.fetchTatiller();
  }

  fetchTatiller(): void {
    fetch('https://date.nager.at/api/v3/publicholidays/2025/TR')
      .then(response => response.json())
      .then(data => {
        this.tatiller = data;
      })
      .catch(error => {
        console.error('Veri alınırken bir hata oluştu:', error);
      });
  }
}
