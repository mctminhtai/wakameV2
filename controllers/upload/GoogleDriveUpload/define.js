const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const CLIENT_ID = '1012069225938-aovcqtf6eft53feaf4d94n3kqquslhpt.apps.googleusercontent.com';
const CLIENT_SECRET = 'Hkc6mZ_S-E9KzL1LA5ykmkAV';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =
	'1//04PORDayfyDnuCgYIARAAGAQSNwF-L9IrwW7FjITA32LufQ35ZcM8JlGUyju0qqRmE52Qf6Sa-DhxBjwM2ugZvRqqZ86SEAFr2N4';

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oauth2Client.setCredentials({
	refresh_token: REFRESH_TOKEN,
});

const drive = google.drive({
	version: 'v3',
	auth: oauth2Client,
});

const filePath = path.join(__dirname, 'business-img.png');

async function uploadFile() {
	try {
		const response = await drive.files.create({
			requestBody: {
				name: 'anhtest.png',
				mimeType: 'image/png',
				parents: ['1r6dfEb1Q7Z5NGF43JBSIlsaD39xdms4r'],
			},
			media: {
				mimeType: 'image/png',
				body: fs.createReadStream(filePath),
			},
		});
		console.log(response.data);
	} catch (error) {
		console.log(error.message);
	}
}

async function createFolder() {
	try {
		const response = await drive.files.create({
			requestBody: {
				name: 'TestUploadFolder1',
				mimeType: 'application/vnd.google-apps.folder',
			},
			fields: 'id',
		});
		console.log(response.data);
	} catch (error) {
		console.log(error.message);
	}
}

async function deleteFile() {
	try {
		const response = await drive.files.delete({
			fileId: '1_CFCx1fq0dG8Wbl7Wi2GTHewxdwlrNnQ',
		});
		console.log(response.data, response.status);
	} catch (error) {
		console.log(error.message);
	}
}

async function shareFileorFolder(){
    try {
        const Id = '1GVletIGUriRXP_R5e2Z7ZB_5e80KVbS3';
        await drive.permissions.create({
			fileId: Id,
			requestBody: {
				role: 'reader', //reader,commenter,writer
				type: 'anyone', //user,group,domain,anyone
			},
		});
    } catch (error) {
        console.log(error.message);
    }
}

async function generatePublicUrl() {
	try {
		const fileId = '1GVletIGUriRXP_R5e2Z7ZB_5e80KVbS3';
		const result = await drive.files.get({
			fileId: fileId,
			fields: 'webViewLink, webContentLink, parents, id',
		});
		console.log(result.data);
	} catch (error) {
		console.log(error.message);
	}
}

async function moveFileBetweenFolder() {
	try {
		const fileId = '1GVletIGUriRXP_R5e2Z7ZB_5e80KVbS3';
		const toFolderId = '10OWvMhYyBaO_hFSnspQv2FIYp3ACz6EX';
		const fromFolderId = '1r6dfEb1Q7Z5NGF43JBSIlsaD39xdms4r';
		const result = drive.files.update({
			fileId: fileId,
			addParents: toFolderId,
			removeParents: fromFolderId,
			fields: 'webViewLink, webContentLink, parents, id',
		});
		console.log(result.data);
	} catch (error) {
		console.log(error.message);
	}
}

async function download() {
	try {
		const fileId = '1GVletIGUriRXP_R5e2Z7ZB_5e80KVbS3';
        const result = await drive.files.get({
            fileId:fileId,
            alt:'media',
        },{
            responseType:'stream'
        })
        const filePath = path.join(__dirname, 'testdownload.png');
        const dest = fs.createWriteStream(filePath);
        await result.data.pipe(dest);
	} catch (error) {
		console.log(error.message);
	}
}


async function createShortcut(){
    try {
        const fileId = '1GVletIGUriRXP_R5e2Z7ZB_5e80KVbS3';
        const result = await drive.files.create({
			requestBody: {
				name: 'this is shortcut',
				mimeType: 'application/vnd.google-apps.shortcut',
				shortcutDetails: {
					targetId: fileId,
				},
			},
			fields: 'id,name,mimeType,shortcutDetails',
		});
        console.log(result.data);
    } catch (error) {
        console.log(error.message);
    }
}
createShortcut();
