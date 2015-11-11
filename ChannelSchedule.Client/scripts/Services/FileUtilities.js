var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            /**
             * Provides a common set of helper/utility methods for performing file I/O.
             *
             * Note that all I/O operations are asynchronous.
             */
            var FileUtilities = (function () {
                function FileUtilities($q, Utilities) {
                    this.$q = $q;
                    this.Utilities = Utilities;
                }
                Object.defineProperty(FileUtilities, "$inject", {
                    get: function () {
                        return [
                            "$q",
                            Services.Utilities.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion
                /**
                 * This helper provides a common location to manipulate the path before it is used. This is
                 * useful for scenarios in which different platforms handle paths differently.
                 *
                 * @param path The requested file path to use.
                 * @returns A potentially manipulated path to use instead.
                 */
                FileUtilities.prototype.preparePath = function (path) {
                    if (!path) {
                        return null;
                    }
                    // On Android platforms the default root path can contain a trailing forward slash
                    // and it can't handle two consecutive forward slashes in a path. Here we remove the
                    // leading backslash from the given path, if it is present (iOS on the other had requires
                    // a leading slash).
                    if (this.Utilities.isAndroid && this.Utilities.startsWith(path, "/")) {
                        path = path.substr(1);
                    }
                    return path;
                };
                /**
                 * Used to get the default root directory for file I/O on local storage.
                 *
                 * This makes it easy for all API calls to use a common location that could be configurable
                 * by the user and/or development vs production environments.
                 *
                 * The current implementation is hard coded.
                 *
                 * If an externalDataDirectory is available it will be used. This makes it easier to
                 * access files on Android devices as the external data directory is normally accessible
                 * on non-rooted devices (while the dataDirectory is only available if you have root).
                 */
                FileUtilities.prototype.getDefaultRootPath = function () {
                    if (typeof (cordova) === "undefined" || typeof (cordova.file) === "undefined") {
                        return "";
                    }
                    else {
                        return cordova.file.externalDataDirectory ? cordova.file.externalDataDirectory : cordova.file.dataDirectory;
                    }
                };
                /**
                 * Used to get the ID of the default root directory for file I/O on local storage.
                 */
                FileUtilities.prototype.getDefaultRootPathId = function () {
                    if (typeof (cordova) === "undefined" || typeof (cordova.file) === "undefined") {
                        return "";
                    }
                    else {
                        return cordova.file.externalDataDirectory ? "cordova.file.externalDataDirectory" : "cordova.file.dataDirectory";
                    }
                };
                /**
                 * Used to read a text file from local storage.
                 *
                 * The path is relative to the current default root directory.
                 *
                 * @param path The path to the file to read.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type string which will be the contents of the text file.
                 */
                FileUtilities.prototype.readTextFile = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getFile(path, flags, function (fileEntry) {
                            fileEntry.file(function (file) {
                                var reader = new FileReader();
                                reader.onload = function (evt) {
                                    q.resolve(reader.result);
                                };
                                reader.onerror = q.reject;
                                reader.readAsText(file);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to write a string of text to a file in local storage.
                 *
                 * @param path The path to the file to write.
                 * @param text The string of text to write to the file.
                 * @param append True to append, false to overwrite (defaults to false).
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type string which will be the contents of the text file.
                 */
                FileUtilities.prototype.writeTextFile = function (path, text, append, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    // Default to overwriting if not specified.
                    if (append == null) {
                        append = false;
                    }
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: true,
                            exclusive: false
                        };
                        rootEntry.getFile(path, flags, function (fileEntry) {
                            fileEntry.createWriter(function (writer) {
                                var blobOptions;
                                if (append) {
                                    writer.seek(writer.length);
                                }
                                else {
                                    writer.truncate(0);
                                }
                                blobOptions = {
                                    type: "text/plain"
                                };
                                writer.onwrite = function () {
                                    q.resolve();
                                };
                                writer.onerror = q.reject;
                                writer.write(new Blob([text], blobOptions));
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to get a list of directories in the given path.
                 *
                 * @param path The path to the directory to examine.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type DirectoryEntry[] which will be a list of directories.
                 */
                FileUtilities.prototype.getDirectories = function (path, rootPath) {
                    var q = this.$q.defer();
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (directoryEntry) {
                            var reader;
                            reader = directoryEntry.createReader();
                            reader.readEntries(function (entries) {
                                var directories = [];
                                entries.forEach(function (entry) {
                                    if (entry.isDirectory) {
                                        directories.push(entry);
                                    }
                                });
                                q.resolve(directories);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to get a list of directories in the given directory.
                 *
                 * @param directory The directory to examine.
                 * @returns A promise of type DirectoryEntry[] which will be a list of directories.
                 */
                FileUtilities.prototype.getDirectoriesUsingEntry = function (directory) {
                    var q = this.$q.defer();
                    var reader;
                    reader = directory.createReader();
                    reader.readEntries(function (entries) {
                        var directories = [];
                        entries.forEach(function (entry) {
                            if (entry.isDirectory) {
                                directories.push(entry);
                            }
                        });
                        q.resolve(directories);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to get a list of directory names in the given path.
                 *
                 * @param path The path to the directory to examine.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type string[] which will be a list of directory names.
                 */
                FileUtilities.prototype.getDirectoryNames = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (directoryEntry) {
                            var reader;
                            reader = directoryEntry.createReader();
                            reader.readEntries(function (entries) {
                                var directoryNames = [];
                                entries.forEach(function (entry) {
                                    if (entry.isDirectory) {
                                        directoryNames.push(entry.name);
                                    }
                                });
                                q.resolve(directoryNames);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to get a list of full paths to directories in the given path.
                 *
                 * @param path The path to the directory to examine.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type string[] which will be a list of full directory paths.
                 */
                FileUtilities.prototype.getDirectoryPaths = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (directoryEntry) {
                            var reader;
                            reader = directoryEntry.createReader();
                            reader.readEntries(function (entries) {
                                var directoryPaths = [];
                                entries.forEach(function (entry) {
                                    if (entry.isDirectory) {
                                        directoryPaths.push(entry.fullPath);
                                    }
                                });
                                q.resolve(directoryPaths);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to get a list of files in the given path.
                 *
                 * @param path The path to the directory to examine.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type FileEntry[] which will be a list of files.
                 */
                FileUtilities.prototype.getFiles = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (directoryEntry) {
                            var reader;
                            reader = directoryEntry.createReader();
                            reader.readEntries(function (entries) {
                                var files = [];
                                entries.forEach(function (entry) {
                                    if (entry.isFile) {
                                        files.push(entry);
                                    }
                                });
                                q.resolve(files);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to get a list of files in the given directory.
                 *
                 * @param directory The directory to examine.
                 * @returns A promise of type FileEntry[] which will be a list of files.
                 */
                FileUtilities.prototype.getFilesUsingEntry = function (directory) {
                    var q = this.$q.defer();
                    var reader;
                    reader = directory.createReader();
                    reader.readEntries(function (entries) {
                        var files = [];
                        entries.forEach(function (entry) {
                            if (entry.isFile) {
                                files.push(entry);
                            }
                        });
                        q.resolve(files);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to get a list of file names in the given path.
                 *
                 * @param path The path to the directory to examine.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type string[] which will be a list of file names.
                 */
                FileUtilities.prototype.getFileNames = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (directoryEntry) {
                            var reader;
                            reader = directoryEntry.createReader();
                            reader.readEntries(function (entries) {
                                var fileNames = [];
                                entries.forEach(function (entry) {
                                    if (entry.isFile) {
                                        fileNames.push(entry.name);
                                    }
                                });
                                q.resolve(fileNames);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to get a list of full paths to files in the given path.
                 *
                 * @param path The path to the directory to examine.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type string[] which will be a list of file names.
                 */
                FileUtilities.prototype.getFilePaths = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (directoryEntry) {
                            var reader;
                            reader = directoryEntry.createReader();
                            reader.readEntries(function (entries) {
                                var filePaths = [];
                                entries.forEach(function (entry) {
                                    if (entry.isFile) {
                                        filePaths.push(entry.fullPath);
                                    }
                                });
                                q.resolve(filePaths);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to get all of the files in the given path.
                 * This method searches child directories recursively.
                 *
                 * @param path The path to the directory to examine.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type FileEntry[] which will be a list of files.
                 */
                FileUtilities.prototype.getAllFiles = function (path, rootPath) {
                    var _this = this;
                    var q = this.$q.defer(), allFiles = [], promises = [];
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    // First lets make sure the directory exists.
                    this.directoryExists(path, rootPath).then(function (exists) {
                        // If this directory doesn't exist, then there are no files to get.
                        if (!exists) {
                            q.resolve([]);
                        }
                        // Get all of the child subdirectories.
                        _this.getAllDirectories(path, rootPath).then(function (directories) {
                            var promise;
                            // Now we are going loop over each of the directories...
                            directories.forEach(function (directory) {
                                // ... and get the files in each directory.
                                promise = _this.getFilesUsingEntry(directory);
                                promise.then(function (files) {
                                    // Add the files for this directory to the full list.
                                    allFiles = allFiles.concat(files);
                                }, q.reject);
                                // Store the promise for the getFiles operation.
                                promises.push(promise);
                            });
                            // We also need to include the files in passed in directory path.
                            promise = _this.getFiles(path, rootPath);
                            promise.then(function (files) {
                                allFiles = allFiles.concat(files);
                            }, q.reject);
                            // Store the promise for the getFile operation.
                            promises.push(promise);
                            // Once all of the getFile I/O operations complete, we can finish.
                            _this.$q.all(promises).then(function () { q.resolve(allFiles); }, function () { q.reject(); });
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to get all of the files in the given path.
                 * This method searches child directories recursively.
                 *
                 * @param path The path to the directory to examine.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type DirectoryEntry[] which will be a list of directories.
                 */
                FileUtilities.prototype.getAllDirectories = function (path, rootPath) {
                    var _this = this;
                    var q = this.$q.defer(), allDirectories = [];
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    // First lets make sure the directory exists.
                    this.directoryExists(path, rootPath).then(function (exists) {
                        // If this directory doesn't exist, then there are no directories to get.
                        if (!exists) {
                            q.resolve([]);
                        }
                        // To kick off recursion, we need to get the directories at this first level.
                        _this.getDirectories(path, rootPath).then(function (directories) {
                            // Save off these first directories.
                            allDirectories = allDirectories.concat(directories);
                            // Kick off recursion.
                            _this.getAllDirectories_recursive(directories, allDirectories, q);
                        }, q.reject);
                    }, q.resolve);
                    return q.promise;
                };
                FileUtilities.prototype.getAllDirectories_recursive = function (dirsToCheck, allDirs, q) {
                    var _this = this;
                    var newDirs = [], promises = [];
                    dirsToCheck.forEach(function (directoryToCheck) {
                        var promise;
                        // Get the child directories for the passed in directories.
                        promise = _this.getDirectoriesUsingEntry(directoryToCheck);
                        promise.then(function (directories) {
                            // Save off the list of directories for this directory.
                            newDirs = newDirs.concat(directories);
                            // Add the directories to the full list
                            allDirs = allDirs.concat(directories);
                        }, q.reject);
                        // Save off the promise for this getDirectories I/O operation.
                        promises.push(promise);
                    });
                    // Once all of the I/O operations for the getDirectories call completes we need
                    // to check to see if we need to continue to recurse or not.
                    this.$q.all(promises).then(function () {
                        if (newDirs.length === 0) {
                            // If there are no more child directories, then we're finally done!
                            q.resolve(allDirs);
                        }
                        else {
                            // If there are more child directories, then we need to recurse.
                            _this.getAllDirectories_recursive(newDirs, allDirs, q);
                        }
                    });
                };
                /**
                 * Used to create a directory at the given path.
                 *
                 * If the directory already exists, it will still return successfully.
                 *
                 * @param path The path to the directory to examine.
                 * @param createParents True to create parent directories if they do not exist.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type void.
                 */
                FileUtilities.prototype.createDirectory = function (path, createParents, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    // Default createParents to false so that the caller has to explicitly opt in to this behavior.
                    if (createParents == null) {
                        createParents = false;
                    }
                    path = this.preparePath(path);
                    if (createParents) {
                        //TODO Make this create parent directories recursively if they don't exist.
                        throw new Error("FileUtilities.createDirectory() createParents=true not implemented.");
                    }
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags;
                        flags = {
                            create: true,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (entry) {
                            // If the call succeeded, then we know the directory was created.
                            q.resolve();
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to remove all of the files and directories underneath the given directory.
                 * The given directory will not be removed.
                 *
                 * @param path The path to the directory to empty.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type void.
                 */
                FileUtilities.prototype.emptyDirectory = function (path, rootPath) {
                    var _this = this;
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    this.directoryExists(path, rootPath).then(function (exists) {
                        // If the directory we are attempting to delete doesn't exist, then
                        // return without failing.
                        if (!exists) {
                            q.resolve();
                        }
                        // First, get a list of ALL child files.
                        _this.getAllFiles(path, rootPath).then(function (fileEntries) {
                            // Then delete all of those files.
                            _this.deleteFilesUsingEntries(fileEntries).then(function () {
                                // Next, get a list of ALL of the child directories.
                                _this.getAllDirectories(path, rootPath).then(function (directoryEntries) {
                                    // Then delete all of those directories.
                                    _this.deleteDirectoriesUsingEntries(directoryEntries).then(q.resolve, q.reject);
                                }, q.reject);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to create a directory at the given path.
                 *
                 * If the directory does not exist, it will still return successfully.
                 * The directory must be completely empty, or the call will fail unless the
                 * recursive flag is set to true.
                 *
                 * @param path The path to the directory to examine.
                 * @param recursive If true, will delete all descendant directories and files.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type void.
                 */
                FileUtilities.prototype.deleteDirectory = function (path, recursive, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    // Default recursive to false so that the caller has to explicitly opt in to this behavior.
                    if (recursive == null) {
                        recursive = false;
                    }
                    path = this.preparePath(path);
                    this.directoryExists(path, rootPath).then(function (exists) {
                        // If the directory we are attempting to delete doesn't exist, then
                        // return without failing.
                        if (!exists) {
                            q.resolve();
                        }
                        if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                            q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                            return q.promise;
                        }
                        window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                            var flags = {
                                create: false,
                                exclusive: false
                            };
                            rootEntry.getDirectory(path, flags, function (entry) {
                                if (recursive) {
                                    entry.removeRecursively(q.resolve, q.reject);
                                }
                                else {
                                    entry.remove(q.resolve, q.reject);
                                }
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to delete the given directory.
                 *
                 * @param directory The directory to delete.
                 * @returns A promise of type void.
                 */
                FileUtilities.prototype.deleteDirectoryUsingEntry = function (directory) {
                    var q = this.$q.defer();
                    directory.remove(q.resolve, q.reject);
                    return q.promise;
                };
                /**
                 * Used to delete the given directories.
                 *
                 * @param directories The directories to delete.
                 * @returns A promise of type void.
                 */
                FileUtilities.prototype.deleteDirectoriesUsingEntries = function (directories) {
                    var _this = this;
                    var q = this.$q.defer(), promises = [];
                    // Kick off a delete of each of the directories.
                    directories.forEach(function (directory) {
                        var promise;
                        promise = _this.deleteDirectoryUsingEntry(directory);
                        // Save off the promise, so we know when to complete.
                        promises.push(promise);
                    });
                    // Once all of the I/O operations have completed, then we can finish.
                    this.$q.all(promises).then(function () { q.resolve(); }, function () { q.reject(); });
                    return q.promise;
                };
                /**
                 * Used to delete a file at the given path.
                 *
                 * If the file does not exist, it will still return successfully.
                 *
                 * @param path The path to the file to delete.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type void.
                 */
                FileUtilities.prototype.deleteFile = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    this.fileExists(path, rootPath).then(function (exists) {
                        // If the file we are attempting to delete doesn't exist, then
                        // return without failing.
                        if (!exists) {
                            q.resolve();
                        }
                        if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                            q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                            return q.promise;
                        }
                        window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                            var flags = {
                                create: false,
                                exclusive: false
                            };
                            rootEntry.getFile(path, flags, function (entry) {
                                entry.remove(q.resolve, q.reject);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to delete the given file.
                 *
                 * @param file The file to delete.
                 * @returns A promise of type void.
                 */
                FileUtilities.prototype.deleteFileUsingEntry = function (file) {
                    var q = this.$q.defer();
                    file.remove(q.resolve, q.reject);
                    return q.promise;
                };
                /**
                 * Used to delete the given files.
                 *
                 * @param files The files to delete.
                 * @returns A promise of type void.
                 */
                FileUtilities.prototype.deleteFilesUsingEntries = function (files) {
                    var _this = this;
                    var q = this.$q.defer(), promises = [];
                    var promise;
                    // Kick off a delete of each of the files.
                    files.forEach(function (file) {
                        promise = _this.deleteFileUsingEntry(file);
                        // Save off the promise, so we know when to complete.
                        promises.push(promise);
                    });
                    // Once all of the I/O operations have completed, then we can finish.
                    this.$q.all(promises).then(function () { q.resolve(); }, function () { q.reject(); });
                    return q.promise;
                };
                /**
                 * Used to check if a file exists at the given path.
                 *
                 * @param path The path to the file check.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type boolean; true if the file exists, false otherwise.
                 */
                FileUtilities.prototype.fileExists = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags;
                        flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getFile(path, flags, function (entry) {
                            // If we were able to get a file, then it exists.
                            q.resolve(true);
                        }, function () {
                            // If we weren't able to get a file, then it doesn't exist.
                            q.resolve(false);
                        });
                    }, q.reject);
                    return q.promise;
                };
                /**
                 * Used to check if a directory exists at the given path.
                 *
                 * @param path The path to the directory check.
                 * @param rootPath The root path to which the given path will be relative to.
                 * @returns A promise of type boolean; true if the directory exists, false otherwise.
                 */
                FileUtilities.prototype.directoryExists = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags;
                        flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (entry) {
                            // If we were able to get a directory, then it exists.
                            q.resolve(true);
                        }, function () {
                            // If we weren't able to get a directory, then it doesn't exist.
                            q.resolve(false);
                        });
                    }, q.reject);
                    return q.promise;
                };
                //#region Injection
                FileUtilities.ID = "FileUtilities";
                return FileUtilities;
            })();
            Services.FileUtilities = FileUtilities;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=FileUtilities.js.map