<!DOCTYPE html>
<html>

<head>
  <title></title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <style type="text/css">
    @media screen {
      @font-face {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        src: local("Lato Regular"), local("Lato-Regular"),
          url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format("woff");
      }

      @font-face {
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        src: local("Lato Bold"), local("Lato-Bold"),
          url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format("woff");
      }

      @font-face {
        font-family: "Lato";
        font-style: italic;
        font-weight: 400;
        src: local("Lato Italic"), local("Lato-Italic"),
          url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format("woff");
      }

      @font-face {
        font-family: "Lato";
        font-style: italic;
        font-weight: 700;
        src: local("Lato Bold Italic"), local("Lato-BoldItalic"),
          url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format("woff");
      }
    }

    /* CLIENT-SPECIFIC STYLES */
    body,
    table,
    td,
    a {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      -ms-interpolation-mode: bicubic;
    }

    /* RESET STYLES */
    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
    }

    table {
      border-collapse: collapse !important;
    }

    body {
      height: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
    }

    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }

    p {
      color: #666666
    }

    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      h1 {
        font-size: 32px !important;
        line-height: 32px !important;
      }
    }

    /* ANDROID CENTER FIX */
    div[style*="margin: 16px 0;"] {
      margin: 0 !important;
    }
  </style>
</head>

<body style="
      background-color: #f4f4f4;
      margin: 0 !important;
      padding: 0 !important;
    ">
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <!-- LOGO -->
    <tr>
      <td style="background: linear-gradient(100deg, #1d4489 0%, #96d8e8 100%)" ; align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px">
          <tr>
            <td align="center" valign="top" style="padding: 40px 10px 40px 10px"></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="background: linear-gradient(100deg, #1d4489 0%, #96d8e8 100%)" ; align="center"
        style="padding: 0px 10px 0px 10px">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top"
              style="
                  padding: 40px 20px 20px 20px;
                  border-radius: 4px 4px 0px 0px;
                  color: #111111;
                  font-family: 'Lato', Helvetica, Arial, sans-serif;
                  font-size: 48px;
                  font-weight: 400;
                  letter-spacing: 4px;
                  line-height: 48px;
                ">
              <img src="https://i.ibb.co/d2L1CZb/Logo-PKM-TI.png" width="125" style="display: block; border: 0px" />
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="background: linear-gradient(100deg, #1d4489 0%, #96d8e8 100%)" ; align="center"
        style="padding: 0px 10px 0px 10px">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px">
          <tr>
            <td bgcolor="#ffffff" align="left"
              style="
                  padding: 10px 30px 40px 30px;
                  color: #666666;
                  font-family: 'Lato', Helvetica, Arial, sans-serif;
                  font-size: 18px;
                  font-weight: 400;
                  line-height: 25px;
                ">
              <p style="margin: 0">Hai {{ $name }}, 👋</p>
              <p style="color: #666666">
                Wah, kabar baik nih! Kamu udah resmi terdaftar di Program
                Kreativitas Mahasiswa Teknologi Informasi (PKM TI)! Keren
                banget loh kamu mau ikutan dan jadi bagian dari perjalanan
                kreatif ini.
              </p style="color: #666666">
              <p>
                Ada beberapa langkah nih yang bisa kamu lakuin untuk
                melancarkan perjalananmu di PKM:
              </p>
              <ul>
                <li style="color: #666666">
                  <strong>Membentuk Tim:</strong>
                  Buat tim PKM kamu dengan teman-teman yang punya ide keren
                  dan semangat yang sama. Jangan lupa mendaftarkan tim kamu di
                  web PKM TI yah!
                </li>
                <li style="color: #666666">
                  <strong>Baca Panduan:</strong>
                  Download panduan PKM buat lebih paham tentang aturan
                  mainnya. Gak perlu bingung, semua info penting ada di sana!
                </li>
                <li style="color: #666666">
                  <strong>Menentukan Ide:</strong>
                  Buat daftar ide-idemu, gak perlu ragu-ragu. Nanti bisa
                  dipilah-pilah, siapa tahu ada yang bisa jadi bahan PKM yang
                  keren!
                </li>
                <li style="color: #666666">
                  <strong>Merancang Proposal:</strong>
                  Proposal itu kayak cerita, jadi jangan lupa buat pembaca
                  tertarik dari awal. Jelaskan ide, tujuan, dan rencana dengan
                  gaya yang menyenangkan. Inget yah, patuhi juga aturan
                  penulisan proposal PKM sesuai panduan.
                </li>
                <li style="color: #666666">
                  <strong>Mencari Dosen Pembimbing:</strong>
                  Cari dosen pembimbing yang punya pengalaman atau minat
                  serupa dengan topik PKM-mu. Ini penting agar kamu
                  mendapatkan bimbingan yang tepat.
                </li>
                <li style="color: #666666">
                  <strong>Tanya-Tanya Aja:</strong>
                  Kalo ada yang bingung atau mau diskusi ide, langsung aja nih
                  tanya para panitia PKM TI. Mereka ramah banget loh!
                </li>
              </ul>

              <p style="color: #666666">
                Terima kasih sudah mendaftar. Selamat menikmati serunya PKM
                TI, yuk buat kegiatan ini berkesan! 🥳
              </p>
              <p style="color: #666666">
                Cheers,<br />
                Tim Ilmiah PKM TI
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td bgcolor="#f4f4f4" align="center" style="padding: 30px 10px 0px 10px">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px">
          <tr>
            <td bgcolor="#3868B2" align="center"
              style="
                  padding: 30px 30px 30px 30px;
                  border-radius: 4px 4px 4px 4px;
                  color: #fff;
                  font-family: 'Lato', Helvetica, Arial, sans-serif;
                  font-size: 18px;
                  font-weight: 400;
                  line-height: 25px;
                ">
              <p style="color: white">PKM TI 2024
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px">
          <tr>
            <td bgcolor="#f4f4f4" align="left"
              style="
                  padding: 0px 30px 30px 30px;
                  color: #666666;
                  font-family: 'Lato', Helvetica, Arial, sans-serif;
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 18px;
                ">
              <br />
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>

</html>
