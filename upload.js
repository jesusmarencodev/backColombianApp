if (!id || id == null) {
    var file_name = 'Image no subida';
    if (!req.files) {
        return res.status(404).json({
            status: 'error',
            message: 'file_name imagen no subida'
        });
    }
    console.log("entrando")
    return res.status(500).json({ NotFount: 'No existe articulo' });
}
            
            
            
            //conseguir el nombre y la extension del archivo
            var file_path = req.files.file0.path;
            console.log(file_path)
			var file_split = file_path.split('\\');
			/* para linux o mac
             var file_split = file_path.split('/');
        */
			//nombre del archivo
			var file_name = file_split[2];

			//sacar la extencion
			var extencion_split = file_name.split('.');
			var file_ext = extencion_split[1];

			//Comprobar la extension
			if (
				(file_ext != 'png') &
				(file_ext != 'jpg') &
				(file_ext != 'gif') &
				(file_ext != 'jpeg')&
				(file_ext != 'svg')
			) {
				//borramos el archivo
				fs.unlink(file_path, (err) => {
					return res.status(404).json({
						status: 'error',
						message: 'la extension de la imagen no es valida',
						file_ext
					});
				});
			} else {
				//subir la imagen y guardar articulo
				ArticleModel.findOneAndUpdate(
					{ _id: id },
					{ image: file_name },
					{ new: true }
				).exec((err, articleUpdate) => {
					if (err)
						return res.status(500).json({
							status: 'error',
							error: err,
							message: 'Error al subir imagen'
						});
					if (!articleUpdate)
						return res.status(404).json({
							status: 'error',
							message: 'el articulo no existe'
						});
					return res.status(200).json({
						status: 'success',
						articleUpdate
					});
				});
			}