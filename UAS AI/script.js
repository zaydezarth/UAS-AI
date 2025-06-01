function deteksiEmosi() {
    const input = document.getElementById("userInput").value.toLowerCase();
    const hasil = document.getElementById("hasil");
  
    const skor = { Senang: 0, Sedih: 0, Marah: 0 };
  
    dataTraining.forEach(item => {
      const kata = item.text.toLowerCase().split(" ");
      kata.forEach(k => {
        if (input.includes(k)) {
          skor[item.label]++;
        }
      });
    });
  
    const emosiTerbesar = Object.keys(skor).reduce((a, b) => skor[a] > skor[b] ? a : b);
  
    if (skor[emosiTerbesar] === 0) {
      hasil.textContent = "Tidak dapat menentukan emosi.";
    } else {
      hasil.textContent = emosiTerbesar;
    }
  }
  