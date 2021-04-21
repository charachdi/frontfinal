import React,{ useState , useEffect} from 'react'
import ReactDatatable from '@ashvin27/react-datatable';
import Avatar from '@material-ui/core/Avatar';

function Datatable(props) {
//   {
//     "id": 1,
//     "Proprietaire_de_la_requete": "Amira KHEZAMI",
//     "Statut": "En attente retour client",
//     "Origine_de_la_requete": "Courrier postal",
//     "Heure_douverture": "05/06/2020 15:20",
//     "heure_de_derniere_modification_de_la_requete": null,
//     "Heure_de_fermeture": null,
//     "Objet": "Envoi d’un message : GARAGE ROMERO R1A18541244098 SAM 05 06 2020",
//     "Numero_de_la_requete": 297557,
//     "Type_de_la_demande": "",
//     "Famille_de_demande": "",
//     "Motifs_de_resiliation": "Arrêt d’activité",
//     "Sous_motif_de_resiliation": "Vente-Cession",
//     "Autre_motif_de_resiliation": "",
//     "date_ouverture": "2020-05-05T23:00:00.000Z",
//     "date_de_fermeture": null,
//     "Famille_de_demande_RC": "Réclamation",
//     "Type_de_la_demande_RC": "Demande de résiliation écrite",
//     "Raison_sociale_du_compte": "ROMERO AUTOMOBILES",
//     "Anciennete": "48",
//     "createdAt": "2021-04-20T23:05:32.000Z",
//     "updatedAt": "2021-04-20T23:05:32.000Z",
//     "CompteClientId": 1,
//     "FileId": 1,
//     "UserId": 8
// }
const [column, setcolumn] = useState([
  {
    key: "Numero_de_la_requete",
    text: "#",
  },
  {
    key: "Proprietaire_de_la_requete",
    text: "Proprietaire de la requete",
    cell: (req, index) => {
      return (
        <>
            <Avatar src={req.User.user_img} style={{width:50 , height:50}} />
            <p>{req.User.full_name}</p>
         </>
      );
  }
  },
  {
    key: "Statut",
    text: "Statut",
  },
  {
    key: "Origine_de_la_requete",
    text: "Origine de la requete",
  },
  {
    key: "Heure_douverture",
    text: "Heure d'ouverture",
  },
  {
    key: "Heure_de_fermeture",
    text: "Heure de fermeture",
  },
  {
    key: "Type_de_la_demande_RC",
    text: "Type de la demande",
  },
  {
    key: "Famille_de_demande_RC",
    text: "Famille de demande",
  },
  {
    key: "Motifs_de_resiliation",
    text: "Motifs de resiliation",
  },
  {
    key: "Statut",
    text: "Statut",
  },
  {
    key: "Anciennete",
    text: "Anciennete",
  },
  {
    key: "Raison_sociale_du_compte",
    text: "Raison sociale du compte",
  },
])


const config = {
  page_size: 10,
  length_menu: [10, 20, 50],
  show_filter: true,
  show_pagination: true,
  pagination: 'advance',
  button: {
      excel: false,
      print: false
  }
}

  return (
    <div id='requetetable' className="row col-12 justify-content-center">
     <ReactDatatable
                config={config}
                records={props.Requetes}
                columns={column}/>
    </div>
  )
}

export default Datatable
